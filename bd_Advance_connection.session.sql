DO $$
DECLARE i INTEGER := 1;
facture_id VARCHAR(200);
quantite NUMERIC;
pu NUMERIC;
BEGIN WHILE i <= 500000 LOOP -- Insérer une nouvelle facture
INSERT INTO facture(id, daty, designation, etat, client)
SELECT 'FAC' || LPAD(i::TEXT, 9, '0'),
    -- Générer un ID de facture unique
    CURRENT_DATE - (i || ' days')::INTERVAL,
    -- Date d'il y a i jours
    'Facture ' || i,
    -- Designation de la facture
    ROUND((RANDOM() * 1000)::NUMERIC, 0),
    -- Etat aléatoire
    client.id -- Client aléatoire parmi ceux existants
FROM client OFFSET floor(
        random() * (
            SELECT COUNT(*)
            FROM client
        )
    )
LIMIT 1
RETURNING id INTO facture_id;
-- Insérer 4 détails de facture pour chaque facture
FOR j IN 1..4 LOOP quantite := ROUND((RANDOM() * 100)::NUMERIC, 2);
pu := ROUND((RANDOM() * 100)::NUMERIC, 2);
INSERT INTO detail_facture(id, article, quantite, pu, montant, facture)
SELECT 'DETFACT' || LPAD((i * 4 - 3 + j)::TEXT, 9, '0'),
    -- Générer un ID de détail unique
    article.id,
    -- Article aléatoire parmi ceux existants
    quantite,
    -- Quantité aléatoire
    pu,
    -- Prix unitaire aléatoire
    quantite * pu,
    -- Montant = quantité * prix unitaire
    facture_id -- ID de la facture créée précédemment
FROM article OFFSET floor(
        random() * (
            SELECT COUNT(*)
            FROM article
        )
    )
LIMIT 1;
END LOOP;
i := i + 1;
END LOOP;
END $$;
select count(*)
from facture;
select count(*)
from detail_facture;
SELECT facture.id -- Article aléatoire parmi ceux existants
FROM facture OFFSET floor(
        random() * (
            SELECT COUNT(*)
            FROM facture
        )
    )
LIMIT 1;