# Villa Candela — Bilder-Referenz

Wo welches Bild auf der Website erscheint. Einfach die Datei mit dem richtigen Namen in den Ordner legen — die Website lädt sie automatisch.

**Basis-Pfad:** `Website/assets/img/`

---

## 01_hero — Hero-Bild (ganz oben, ganzer Bildschirm)
| Dateiname | Position | Hinweis |
|---|---|---|
| `01.jpg` | Hintergrundbild ganz oben (100 % Viewport) | Querformat, mind. 2400 px breit |

---

## 02_drei_welten — „Drei Welten unter einem Dach" (2×2 Grid)
Reihenfolge: **links oben → rechts oben → links unten → rechts unten**

| Dateiname | Position auf Website |
|---|---|
| `01.jpg` | oben links |
| `02.jpg` | oben rechts |
| `03.jpg` | unten links |
| `04.jpg` | unten rechts |

---

## 03_galerie_aussen — Galerie „Außen & Garten" (12 Bilder)
Reihenfolge: links → rechts, zeilenweise (Raster 2 Spalten mobil / 3 Spalten Desktop). Querformat (4:3).

| Dateiname | Reihenfolge |
|---|---|
| `01.jpg` … `12.jpg` | fortlaufend, Position 1–12 |

---

## 04_galerie_haupt — Galerie „Master House" (18 Bilder)
Reihenfolge: links → rechts, zeilenweise. Querformat (4:3).

| Dateiname | Reihenfolge |
|---|---|
| `01.jpg` … `18.jpg` | fortlaufend, Position 1–18 |

---

## 05_galerie_apt1 — Galerie „Apartment I" (6 Bilder)
| Dateiname | Format |
|---|---|
| `01.jpg` – `03.jpg` | Querformat (4:3) |
| `04.jpg` – `06.jpg` | Hochformat (3:4) |

---

## 06_galerie_apt2 — Galerie „Apartment II" (6 Bilder)
| Dateiname | Format |
|---|---|
| `01.jpg` – `03.jpg` | Querformat (4:3) |
| `04.jpg` – `06.jpg` | Hochformat (3:4) |

---

## 07_grundrisse — Grundrisse & Ansichten
Diese Dateien bitte **nicht umbenennen** (SVG-Filter und Lightbox referenzieren sie direkt).

| Dateiname | Inhalt |
|---|---|
| `grundriss_eg.png` | Erdgeschoss (Apartment I + II + Garten) |
| `grundriss_og.png` | Hauptappartement (Obergeschoss) |
| `grundriss_turm.png` | Turmzimmer (Dachgeschoss) |
| `suedansicht.png` | Südansicht |
| `nordansicht.png` | Nordansicht |
| `ostansicht.png` | Ostansicht |
| `westansicht.png` | Westansicht |

---

## 08_lebensgefuehl — „Nicht nur ein Haus — ein Lebensgefühl" (5 Bilder)
Layout: 3 Bilder oben, 2 Bilder unten (3+2-Grid)

| Dateiname | Position |
|---|---|
| `01.jpg` | oben links |
| `02.jpg` | oben Mitte |
| `03.jpg` | oben rechts |
| `04.jpg` | unten links |
| `05.jpg` | unten rechts |

---

## 09_zuhause — „Ein Zuhause, mit Liebe gebaut" (1 Bild)
| Dateiname | Position |
|---|---|
| `01.jpg` | Großes Bild links neben dem Story-Text |

---

## 10_paradise — „Ein Haus, das man fühlt" (3 Bilder)
| Dateiname | Position |
|---|---|
| `01.jpg` | links |
| `02.jpg` | Mitte (auch Video-Poster) |
| `03.jpg` | rechts |

---

## Hinweise

**Bildformat:** JPEG, mind. 1600 px auf der längeren Seite. Querformat für Außen/Galerie (4:3), Hochformat für Hero/Zuhause möglich.

**Bilder austauschen:** Einfach die neue Datei mit **exakt demselben Dateinamen** in den Ordner legen und überschreiben. Dann `git add . && git commit -m "Bilder aktualisiert" && git push origin main`.

**Reihenfolge ändern:** Claude Bescheid geben (z. B. „in `03_galerie_aussen` soll `01.jpg` und `03.jpg` tauschen") — ich update die HTML-Arrays entsprechend.

**Bildunterschriften:** Alle Captions sind in allen 6 Sprachen (DE/EN/ES/NL/FR/RU) hinterlegt. Wenn du einen Titel ändern willst, sag Claude einfach welcher Ordner/welche Nummer und den neuen Text.

**Neue Bilder hinzufügen:** Geht nicht per Datei ablegen allein — die Anzahl ist fest im HTML codiert. Claude kurz Bescheid geben.
