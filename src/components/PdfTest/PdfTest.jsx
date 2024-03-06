import React, { useState } from "react";
import { Document, Page, Text, View, StyleSheet, PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";
import Home from "../Home/Home";
import Table, { dataDefault } from "../../utilsComponents/Table/Table";
import Input from "../../utilsComponents/Input/Input";
import Loader from "../../utilsComponents/Hider/Loader/Loader";
import Modal from "../../utilsComponents/Modal/Modal";
import { AnimatePresence } from "framer-motion";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  section: {
    margin: 10,
    padding: 10,
    fontSize: 10,
  },
});

const PdfTest = () => {
  const [showPDF, setShowPDF] = useState(true);
  const handlePdfView = () => {
    setShowPDF(!showPDF);
  };
  return (
    <div className="inner">
      <PDFDownloadLink document={<MyDocument />} fileName="test.pdf">
        {({ blob, url, loading, error }) => (loading ? <Loader /> : <button>Download now</button>)}
      </PDFDownloadLink>
      <button onClick={handlePdfView}> Open PDF Viewer </button>

      <AnimatePresence>
        {showPDF && (
          <Modal closer={handlePdfView}>
            <div className="container_pdf" style={{ height: "85vh", width: "35rem" }}>
              <PDFViewer style={{ width: "100%", height: "93%", backgroundColor: "transparent" }} showToolbar={false}>
                <MyDocument />
              </PDFViewer>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <TablePdf {...dataDefault} />
    </Page>
  </Document>
);

const TablePdf = ({ body = [], index = [], titles = [] }) => {
  const lengths = getColumnLength(index, titles, body);
  return (
    <View style={styles.section}>
      <View style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        {titles.map((t, i) => (
          <Text
            key={i}
            style={{
              width: lengths[i],
              //   fontWeight: "bold",
              padding: "10px 12px 10px 4px",
            }}
          >
            {t}
          </Text>
        ))}
      </View>
      <View style={{ borderBottom: "0.9px solid #000", width: "100%" }} />
      {body.map((row, i) => (
        <View
          key={i}
          style={{
            display: "flex",
            backgroundColor: i % 2 === 0 ? "#e3e7e7" : "",
            flexDirection: "row",
            width: "100%",
            borderBottom: "0.2px solid #e3e7e7",
          }}
        >
          {row.map((cell, j) => {
            let text = cell;
            if (Array.isArray(index[j])) {
              for (let o = 0; o < index[j].length; o++) {
                text = text[index[j][o]];
              }
            }
            console.log(lengths[j]);
            return (
              <Text
                key={j}
                style={{
                  width: lengths[j],
                  color: "#232222",
                  padding: "10px 12px 10px 4px",
                }}
              >
                {text}
              </Text>
            );
          })}
        </View>
      ))}
    </View>
  );
};

const getColumnLength = (index = [], titles = [], body = [], fontSize = 10) => {
  const lengths = titles.map((t) => 0);

  for (let i = 0; i < titles.length; i++) {
    let length = titles[i].length * fontSize;
    checkIfHigher(lengths, i, length);
  }

  for (let u = 0; u < body.length; u++) {
    let row = body[u];
    for (let i = 0; i < row.length; i++) {
      let text = row[i];
      if (Array.isArray(index[i])) {
        for (let o = 0; o < index[i].length; o++) {
          text = text[index[i][o]];
        }
      }
      let length = (text + "").length * fontSize;
      checkIfHigher(lengths, i, length);
    }
  }
  console.log(lengths);
  return lengths;
};

const checkIfHigher = (tab = [], index, newValue) => {
  if (tab[index] < newValue) {
    tab[index] = newValue;
  }
};
export default PdfTest;
