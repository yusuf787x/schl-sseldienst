/**
 * Leistungsseiten. Jede Seite trägt ein eigenes Keyword-Cluster
 * (siehe SEO-KEYWORD-PLAN.md, Cluster A und B).
 *
 * Schreibregel für den GEO-Teil: Der erste Satz unter jeder H2 beantwortet
 * die Frage der Überschrift direkt und vollständig. AI-Systeme zitieren
 * Absätze, keine ganzen Seiten.
 */

export interface Abschnitt {
  h2: string;
  absaetze: string[];
  /** Optionale Aufzählung unter den Absätzen. */
  liste?: { titel: string; text: string }[];
}

export interface Leistung {
  slug: string;
  /** Kurzer Name für Navigation und Karten. */
  name: string;
  /** H1 und Title-Basis. */
  titel: string;
  /** Meta-Description. Unter 160 Zeichen halten. */
  meta: string;
  /** Ein Satz für die Übersichtskarte auf der Startseite. */
  kurz: string;
  /** Bild in public/img. Alt-Text beschreibt das Motiv, nicht das Keyword. */
  bild: { datei: string; alt: string };
  /** Phosphor-Icon-Name, siehe components/Icon.tsx */
  icon: "key" | "clock" | "cylinder" | "shield" | "hammer" | "buildings";
  /** Einleitung unter der H1, 2 bis 3 Sätze. */
  intro: string;
  abschnitte: Abschnitt[];
  faq: { frage: string; antwort: string }[];
  /** Slugs verwandter Leistungen für die interne Verlinkung. */
  verwandt: string[];
  /** Slug eines passenden Ratgeber-Beitrags. */
  ratgeber?: string;
}

export const leistungen: Leistung[] = [
  {
    slug: "tueroeffnung",
    name: "Türöffnung",
    titel: "Türöffnung in Lage und im Kreis Lippe",
    meta: "Ausgesperrt in Lage? Wir öffnen Ihre Tür zum Festpreis, Anfahrt inklusive. Rund um die Uhr im gesamten Kreis Lippe erreichbar.",
    kurz: "Zugefallen, abgeschlossen oder Schlüssel steckt innen. Wir kommen und machen auf.",
    bild: { datei: "tueroeffnung.jpg", alt: "Schlüsselbund steckt von außen im Schloss einer Holztür" },
    icon: "key",
    intro:
      "Eine Türöffnung ist der Einsatz, für den man uns am häufigsten ruft. Sie kostet bei uns einen festen Betrag, den Sie am Telefon erfahren, bevor wir losfahren. Anfahrt im Kreis Lippe ist enthalten, Nacht und Wochenende kosten keinen Aufschlag.",
    abschnitte: [
      {
        h2: "Was eine Türöffnung bei uns kostet",
        absaetze: [
          "Eine normale Türöffnung kostet bei uns 89 € tagsüber und 129 € nachts sowie an Sonn- und Feiertagen, jeweils inklusive Anfahrt und inklusive Mehrwertsteuer. Diesen Preis nennen wir Ihnen am Telefon, bevor der Monteur losfährt, und er ändert sich danach nicht mehr.",
          "Material kommt nur dazu, wenn es tatsächlich gebraucht wird, etwa ein neuer Schließzylinder, wenn der alte defekt ist. Auch das besprechen wir vor Ort mit Ihnen, bevor irgendetwas eingebaut wird. Sie entscheiden, ob Sie das gleich machen lassen wollen oder nicht.",
        ],
      },
      {
        h2: "Die vier Fälle, die wir am häufigsten antreffen",
        absaetze: [
          "Nicht jede verschlossene Tür ist derselbe Fall. Was Sie erwartet, hängt davon ab, was genau passiert ist. Wenn Sie uns das am Telefon in einem Satz schildern, weiß der Monteur schon vor der Abfahrt, womit er rechnen muss.",
        ],
        liste: [
          {
            titel: "Die Tür ist zugefallen",
            text: "Der unkomplizierteste Fall. Die Tür ist nur von der Falle gehalten, nicht abgeschlossen. Oft bekommen wir sie schonend auf, ohne dass am Schloss etwas kaputtgeht.",
          },
          {
            titel: "Die Tür ist abgeschlossen",
            text: "Sie haben zugezogen und abgeschlossen, dann sind die Riegel ausgefahren. Das ist deutlich aufwendiger als eine zugefallene Tür. Wir arbeiten trotzdem so, dass das Schloss möglichst heil bleibt.",
          },
          {
            titel: "Der Schlüssel steckt von innen",
            text: "Steckt ein Schlüssel innen im Zylinder, kommt von außen kein zweiter mehr hinein. Sagen Sie uns das unbedingt am Telefon, es ändert das Vorgehen grundlegend.",
          },
          {
            titel: "Der Schlüssel ist abgebrochen",
            text: "Ein abgebrochener Bart sitzt im Zylinder fest. Wir holen ihn heraus und prüfen den Zylinder. Ob er weiterverwendet werden kann, sehen wir erst danach und sagen es Ihnen ehrlich.",
          },
        ],
      },
      {
        h2: "Geht die Tür dabei kaputt?",
        absaetze: [
          "In den meisten Fällen nicht. Wir arbeiten grundsätzlich zuerst mit zerstörungsfreien Methoden und greifen erst dann zu aufwendigeren Verfahren, wenn es anders nicht geht. Bei einer nur zugefallenen Tür bleibt üblicherweise alles heil.",
          "Ganz ausschließen lässt sich eine Beschädigung aber nicht, und jeder, der Ihnen etwas anderes verspricht, sagt nicht die Wahrheit. Bei hochwertigen Sicherheitszylindern und bei abgeschlossenen Türen mit mehrfach verriegeltem Schloss kann es vorkommen, dass der Zylinder aufgebohrt werden muss. Wenn wir zu diesem Punkt kommen, halten wir an und besprechen es vorher mit Ihnen. Sie erfahren dann auch gleich, was der Ersatzzylinder kostet.",
        ],
      },
      {
        h2: "Warum wir vor Ort Ihren Ausweis sehen wollen",
        absaetze: [
          "Bevor wir öffnen, prüfen wir kurz, ob Sie berechtigt sind, diese Tür öffnen zu lassen. Das ist kein Misstrauen Ihnen gegenüber, sondern der einzige Schutz davor, dass jemand anderes über einen Schlüsseldienst in Ihre Wohnung kommt.",
          "Wenn Ihr Ausweis hinter der verschlossenen Tür liegt, was der Normalfall ist, finden wir einen anderen Weg. Post mit Ihrem Namen, ein Nachbar, der Sie kennt, oder ein Blick auf Ihre Unterlagen nach dem Öffnen reichen in der Regel aus. Ohne jeden Nachweis öffnen wir allerdings nicht.",
        ],
      },
    ],
    faq: [
      {
        frage: "Was kostet eine Türöffnung in Lage?",
        antwort:
          "89 € tagsüber, 129 € nachts sowie an Sonn- und Feiertagen. Anfahrt im Kreis Lippe und 19 % Mehrwertsteuer sind enthalten. Material kommt nur dazu, wenn es wirklich gebraucht wird, und wird vorher mit Ihnen besprochen.",
      },
      {
        frage: "Wie schnell sind Sie da?",
        antwort:
          "Das hängt davon ab, wo Sie sind und ob gerade ein anderer Einsatz läuft. Wir nennen Ihnen am Telefon eine ehrliche Einschätzung statt einer Wunschzahl. Wenn ein Kind oder eine hilfebedürftige Person hinter der Tür ist, sagen Sie das sofort, solche Einsätze ziehen wir vor.",
      },
      {
        frage: "Kann ich mit Karte bezahlen?",
        antwort:
          "Ja. Sie können bar oder mit EC-Karte zahlen und bekommen in jedem Fall eine ordentliche Rechnung über die Türöffnung und eventuell verwendetes Material.",
      },
      {
        frage: "Öffnen Sie auch Autos?",
        antwort:
          "Nein. Wir sind auf Gebäude spezialisiert, also Haus-, Wohnungs-, Neben- und Gewerbetüren. Für Fahrzeuge ist der Pannendienst Ihres Automobilclubs der richtige Ansprechpartner, der das in der Regel auch günstiger erledigt.",
      },
    ],
    verwandt: ["schluesselnotdienst", "schloss-zylinder-wechseln"],
    ratgeber: "ausgesperrt-was-tun",
  },
  {
    slug: "schluesselnotdienst",
    name: "Schlüsselnotdienst",
    titel: "Schlüsselnotdienst für Lage und den Kreis Lippe",
    meta: "Schlüsselnotdienst rund um die Uhr in Lage und Umgebung. Nachts, sonntags, feiertags. Ein Festpreis ohne Zuschläge.",
    kurz: "Nachts, sonntags, feiertags. Erreichbar, wenn es wirklich darauf ankommt.",
    bild: { datei: "notdienst-nacht.jpg", alt: "Ruhige Wohnstraße bei Nacht, beleuchtet von Straßenlaternen" },
    icon: "clock",
    intro:
      "Türen fallen selten zu einer passenden Uhrzeit ins Schloss. Unser Notdienst ist deshalb rund um die Uhr erreichbar, auch sonntags und an Feiertagen. Der Preis nachts unterscheidet sich von dem am Tag, aber er steht fest und Sie erfahren ihn am Telefon.",
    abschnitte: [
      {
        h2: "Was ein Notdienst nachts kosten darf",
        absaetze: [
          "Bei uns kostet der Notdienst außerhalb der Zeit von 7 bis 20 Uhr sowie an Sonn- und Feiertagen 129 €, Anfahrt und Mehrwertsteuer inklusive. Das ist ein fester Betrag und kein Startwert, auf den noch etwas aufgeschlagen wird.",
          "Am Markt sind Nacht- und Wochenendzuschläge von 50 bis 150 Prozent auf den Grundpreis üblich. Wir haben uns stattdessen für zwei feste Beträge entschieden, weil ein Zuschlag in Prozent für Sie am Telefon nicht nachrechenbar ist und genau das der Punkt ist, an dem unseriöse Anbieter ansetzen.",
        ],
      },
      {
        h2: "Wann ein Anruf beim Notdienst wirklich nötig ist",
        absaetze: [
          "Ein Notdienst ist dann richtig, wenn Sie nicht bis zum nächsten Werktag warten können: wenn ein Kind oder ein pflegebedürftiger Mensch allein hinter der Tür ist, wenn der Herd an ist, wenn Sie dringend an Medikamente müssen oder wenn nach einem Einbruch die Wohnung offen steht.",
          "Nicht jeder Fall ist ein Notfall. Wenn Sie bei Freunden unterkommen können und es um eine zugefallene Tür ohne Gefahr für jemanden geht, sagen wir Ihnen auch offen, dass ein Anruf am nächsten Morgen Sie 40 € weniger kostet. Wir verdienen lieber einmal weniger, als dass Sie sich später über uns ärgern.",
        ],
      },
      {
        h2: "So läuft ein Notdiensteinsatz ab",
        absaetze: [
          "Von Ihrem Anruf bis zur Rechnung sind es sechs Schritte, und keiner davon enthält eine Überraschung.",
        ],
        liste: [
          {
            titel: "Ihr Anruf",
            text: "Sie schildern in ein, zwei Sätzen, wo Sie sind und was mit Tür, Schloss oder Schlüssel los ist.",
          },
          {
            titel: "Preis am Telefon",
            text: "Wir ordnen die Lage ein und nennen Ihnen den Festpreis sowie den Fall, in dem Material dazukommen könnte.",
          },
          {
            titel: "Anfahrt",
            text: "Nach Ihrer Beauftragung fährt der Monteur los. Wir sagen Ihnen vorher, womit Sie zeitlich rechnen müssen.",
          },
          {
            titel: "Berechtigung",
            text: "Vor Ort klären wir kurz, dass Sie diese Tür öffnen lassen dürfen. Das schützt Sie und Ihre Nachbarn.",
          },
          {
            titel: "Öffnung",
            text: "Wir öffnen die Tür fachgerecht und so schonend, wie Schloss und Situation es zulassen.",
          },
          {
            titel: "Zahlung und Rechnung",
            text: "Sie zahlen bar oder mit Karte, wie am Telefon besprochen, und erhalten eine nachvollziehbare Rechnung.",
          },
        ],
      },
    ],
    faq: [
      {
        frage: "Sind Sie wirklich 24 Stunden erreichbar?",
        antwort:
          "Ja, auch nachts, sonntags und an Feiertagen. Wenn Sie ausnahmsweise niemanden erreichen, weil ein Einsatz läuft, versuchen Sie es kurz danach noch einmal. Wir rufen zurück, sobald es geht.",
      },
      {
        frage: "Gibt es einen Zuschlag für Nacht oder Wochenende?",
        antwort:
          "Nein, keinen prozentualen Zuschlag. Es gibt zwei feste Preise: 89 € zwischen 7 und 20 Uhr an Werktagen, 129 € in allen übrigen Zeiten. Mehr wird daraus nicht.",
      },
      {
        frage: "Soll ich lieber bis morgen warten?",
        antwort:
          "Wenn niemand in Gefahr ist, nichts auf dem Herd steht und Sie irgendwo unterkommen können, sparen Sie mit einem Anruf am nächsten Morgen 40 €. Sobald jemand hinter der Tür ist oder die Wohnung nach einem Einbruch offen steht, warten Sie bitte nicht.",
      },
    ],
    verwandt: ["tueroeffnung", "einbruchschaden"],
    ratgeber: "schluesseldienst-kosten",
  },
  {
    slug: "schloss-zylinder-wechseln",
    name: "Schloss und Zylinder",
    titel: "Schloss und Schließzylinder wechseln in Lage",
    meta: "Schließzylinder wechseln in Lage und Umgebung: nach Schlüsselverlust, beim Einzug oder wenn das Schloss klemmt. Festpreis, Beratung vor Ort.",
    kurz: "Nach Schlüsselverlust, beim Einzug oder wenn der Schlüssel nicht mehr will.",
    bild: { datei: "schliesszylinder.jpg", alt: "Schließzylinder in einer Haustür, Nahaufnahme" },
    icon: "cylinder",
    intro:
      "Ein Schließzylinder ist das Herzstück Ihrer Tür und gleichzeitig das Teil, das sich am einfachsten tauschen lässt. Ob nach einem Schlüsselverlust, nach dem Einzug oder weil das Schloss klemmt: Wir wechseln ihn fachgerecht und sagen Ihnen vorher, was es kostet.",
    abschnitte: [
      {
        h2: "Wann ein Zylinderwechsel sinnvoll ist",
        absaetze: [
          "Ein Zylinderwechsel ist immer dann angebracht, wenn Sie nicht mehr sicher wissen, wer Zugang zu Ihrer Wohnung hat. Das ist der Fall nach einem Schlüsselverlust, nach einem Einbruch, nach einer Trennung, nach dem Kauf einer Immobilie und beim Einzug in eine Wohnung, deren Vorgeschichte Sie nicht kennen.",
          "Der zweite Grund ist rein technisch. Wenn sich der Schlüssel nur noch mit Gefühl drehen lässt, wenn Sie ihn leicht ziehen oder drücken müssen, damit etwas passiert, oder wenn er beim Abziehen hakt, kündigt sich ein Defekt an. Ein Zylinder gibt selten von einem Tag auf den anderen auf, er warnt vorher. Wer diese Warnung ignoriert, steht irgendwann mit einem abgebrochenen Schlüssel vor der Tür und zahlt dann für eine Türöffnung obendrauf.",
        ],
      },
      {
        h2: "Was ein neuer Schließzylinder kostet",
        absaetze: [
          "Der Preis setzt sich aus zwei Teilen zusammen: der Arbeitszeit für den Wechsel und dem Zylinder selbst. Die Arbeitszeit ist überschaubar, ein Zylindertausch dauert bei einer normalen Tür nur wenige Minuten. Der Zylinder kostet je nach Sicherheitsstufe sehr unterschiedlich, von einfachen Ausführungen bis zu Modellen mit Bohrschutz, Ziehschutz und kopiergeschützter Schlüsselkarte.",
          "Wir bringen deshalb keine Pauschale ins Spiel, sondern schauen uns Ihre Tür an und nennen Ihnen den Preis, bevor wir etwas einbauen. Ein wichtiger Hinweis noch: Ein hochwertiger Zylinder in einer schwachen Tür bringt wenig. Wenn die Tür selbst oder der Rahmen die Schwachstelle ist, sagen wir Ihnen das, auch wenn dann der teure Zylinder nicht verkauft wird.",
        ],
      },
      {
        h2: "Die richtige Zylinderlänge ist keine Kleinigkeit",
        absaetze: [
          "Ein Zylinder muss exakt zur Türstärke passen. Steht er außen mehr als drei Millimeter über, bietet er eine Angriffsfläche, an der er sich mit dem passenden Werkzeug abziehen lässt. Das ist eine der verbreitetsten Einbruchmethoden überhaupt und gleichzeitig eine der am einfachsten zu vermeidenden.",
          "Genau deshalb ist der Zylindertausch aus dem Baumarkt öfter ein Problem als eine Lösung. Wir messen die Türstärke, wählen die passende Länge und setzen, wo es sinnvoll ist, einen Schutzbeschlag davor. Das kostet ein paar Euro mehr und ist der Unterschied zwischen einem Schloss und einem Sicherheitsschloss.",
        ],
      },
    ],
    faq: [
      {
        frage: "Kann ich den Zylinder auch selbst tauschen?",
        antwort:
          "Technisch ja, es ist eine Stulpschraube. Die Fehler passieren woanders: bei der Länge, bei der Sicherheitsstufe und bei der Frage, ob Ihre Tür den Zylinder überhaupt schützt. Wenn Sie es selbst machen, messen Sie die Türstärke vorher genau und lassen Sie den Zylinder außen keinesfalls überstehen.",
        },
      {
        frage: "Darf ich als Mieter den Zylinder wechseln?",
        antwort:
          "In der Regel ja, solange Sie den Originalzylinder aufbewahren und beim Auszug wieder einsetzen. Sprechen Sie es trotzdem mit dem Vermieter ab. Gehört Ihre Tür zu einer Schließanlage im Haus, geht es nicht ohne Zustimmung, weil Ihr Zylinder Teil eines größeren Systems ist.",
      },
      {
        frage: "Wie lange dauert der Wechsel?",
        antwort:
          "Bei einer normalen Haus- oder Wohnungstür sind es wenige Minuten, wenn der passende Zylinder da ist. Aufwendiger wird es nur, wenn das Einsteckschloss selbst defekt ist oder die Tür nachjustiert werden muss.",
      },
      {
        frage: "Bekomme ich Schlüssel nachgemacht?",
        antwort:
          "Bei einfachen Zylindern in der Regel problemlos. Bei Sicherheitszylindern mit Kopierschutz brauchen Sie die zugehörige Sicherungskarte, sonst darf niemand einen Nachschlüssel anfertigen. Das ist Absicht und genau der Punkt, für den Sie bei so einem Zylinder bezahlen.",
      },
    ],
    verwandt: ["tueroeffnung", "einbruchschutz"],
    ratgeber: "schluessel-verloren",
  },
  {
    slug: "einbruchschutz",
    name: "Einbruchschutz",
    titel: "Einbruchschutz in Lage und im Kreis Lippe",
    meta: "Einbruchschutz für Haus und Wohnung im Kreis Lippe: Türen und Fenster nachrüsten, ehrliche Beratung vor Ort, Umsetzung vom Fachbetrieb.",
    kurz: "Türen und Fenster nachrüsten, bevor etwas passiert. Beratung ohne Verkaufsdruck.",
    bild: { datei: "einbruchschutz.jpg", alt: "Türgriff mit Schließzylinder an einer massiven Außentür" },
    icon: "shield",
    intro:
      "Einbruchschutz ist der einzige Teil unserer Arbeit, den Sie in Ruhe planen können. Wir schauen uns Ihr Haus an, sagen Ihnen, wo die tatsächliche Schwachstelle liegt, und setzen um, was sinnvoll ist. Auch dann, wenn das am Ende weniger ist, als Sie erwartet haben.",
    abschnitte: [
      {
        h2: "Wo Einbrecher wirklich hineinkommen",
        absaetze: [
          "Die meisten Einbrüche in Wohnhäusern laufen mechanisch und unspektakulär ab: Fenster und Terrassentüren werden aufgehebelt, Zylinder abgezogen oder abgebrochen, Türen mit einem einfachen Werkzeug am Rahmen aufgedrückt. Hochtechnische Methoden sind die Ausnahme, die Gelegenheit ist die Regel.",
          "Für Sie heißt das etwas Praktisches: Die Haustür zur Straße ist selten das eigentliche Problem. Gefährdet sind die Stellen, die von außen nicht einsehbar sind, also die Terrassentür auf der Gartenseite, das Kellerfenster hinter der Hecke, die Nebeneingangstür neben der Garage. Wer sein Geld in eine Hochsicherheitshaustür steckt und die Terrassentür so lässt, wie sie ist, hat viel bezahlt und wenig gewonnen.",
        ],
      },
      {
        h2: "Was sich nachrüsten lässt",
        absaetze: [
          "Sie müssen weder Türen noch Fenster austauschen, um deutlich besser dazustehen. Der größte Teil wirksamer Maßnahmen ist Nachrüstung am vorhandenen Bauteil.",
        ],
        liste: [
          {
            titel: "Sicherheitszylinder mit Zieh- und Bohrschutz",
            text: "Verhindert die beiden häufigsten Angriffe auf das Schloss. In Verbindung mit einem Schutzbeschlag die wirksamste Einzelmaßnahme an der Haustür.",
          },
          {
            titel: "Schutzbeschlag",
            text: "Deckt den Zylinder ab, sodass kein Werkzeug ansetzen kann. Ohne ihn nützt auch ein guter Zylinder nur die Hälfte.",
          },
          {
            titel: "Mehrfachverriegelung",
            text: "Statt eines Riegels greifen mehrere Punkte über die Türhöhe. Macht das Aufhebeln deutlich aufwendiger.",
          },
          {
            titel: "Pilzkopfverriegelung an Fenstern",
            text: "Die Beschläge verhaken sich im Rahmen statt nur anzuliegen. Die Standardnachrüstung gegen Aufhebeln.",
          },
          {
            titel: "Abschließbare Fenstergriffe",
            text: "Günstig, schnell montiert, und sie verhindern das Öffnen nach dem Durchgreifen durch eine eingeschlagene Scheibe.",
          },
          {
            titel: "Querriegelschloss",
            text: "Sichert die Tür über die gesamte Breite bis in die Laibung. Besonders bei Wohnungs- und Kellertüren mit schwachem Rahmen sinnvoll.",
          },
        ],
      },
      {
        h2: "Die wirksamste Maßnahme kostet nichts",
        absaetze: [
          "Schließen Sie ab. Nicht zuziehen, sondern zweimal umdrehen. Eine nur zugezogene Tür wird lediglich von der Schlossfalle gehalten und lässt sich mit einfachen Mitteln in Sekunden öffnen, ganz gleich, wie gut Ihr Zylinder ist. Erst beim Abschließen fahren die Riegel aus, und die machen den Unterschied.",
          "Dasselbe gilt für gekippte Fenster. Ein gekipptes Fenster ist für einen Einbrecher ein offenes Fenster, auch im ersten Stock. Wenn Sie das Haus verlassen, schließen Sie es ganz. Diese beiden Gewohnheiten kosten Sie zusammen zehn Sekunden am Tag und wirken besser als manche Nachrüstung.",
        ],
      },
      {
        h2: "Beratung von der Polizei und Förderung",
        absaetze: [
          "Die Polizei bietet über ihre Beratungsstellen eine kostenlose und vor allem herstellerneutrale Sicherheitsberatung an. Wir empfehlen das ausdrücklich, auch wenn wir daran nichts verdienen. Die Polizei verkauft Ihnen nichts, und ihre Einschätzung ist ein guter Gegencheck zu jedem Angebot, das Sie bekommen, unseres eingeschlossen.",
          "Zur Förderung ein klares Wort: Den direkten KfW-Investitionszuschuss speziell für Einbruchschutz gibt es seit 2023 nicht mehr. Möglich bleibt eine Finanzierung über den zinsgünstigen KfW-Kredit 159 (Altersgerecht Umbauen), der Einbruchschutzmaßnahmen einschließt, sowie eine Förderung im Rahmen der BEG, wenn Fenster oder Außentüren ohnehin energetisch erneuert werden. Prüfen Sie den Stand bitte aktuell bei der KfW, Förderprogramme ändern sich.",
        ],
      },
    ],
    faq: [
      {
        frage: "Was kostet es, eine Haustür nachzurüsten?",
        antwort:
          "Das hängt stark davon ab, was schon da ist. Ein Sicherheitszylinder mit Schutzbeschlag liegt im überschaubaren dreistelligen Bereich, ein Querriegelschloss darüber. Wir schauen uns Ihre Tür an und machen Ihnen ein Angebot, bevor Sie sich entscheiden. Die Beratung selbst kostet nichts.",
      },
      {
        frage: "Welche Widerstandsklasse brauche ich?",
        antwort:
          "Für private Wohnhäuser empfiehlt die Polizei in der Regel RC2. Das hält einem Gelegenheitstäter mit einfachem Werkzeug für einige Minuten stand, und genau darum geht es: Die meisten Versuche werden abgebrochen, wenn sie zu lange dauern. RC3 lohnt sich bei besonders gefährdeten Objekten.",
      },
      {
        frage: "Bringt eine Alarmanlage mehr als bessere Schlösser?",
        antwort:
          "Sie ersetzt sie nicht. Eine Alarmanlage meldet, dass jemand drin ist, Mechanik verhindert, dass er hineinkommt. Die Reihenfolge ist deshalb immer erst die Mechanik, dann die Elektronik. Wer zuerst eine Alarmanlage kauft, hat die teurere Lösung für das kleinere Problem.",
      },
    ],
    verwandt: ["einbruchschaden", "schloss-zylinder-wechseln"],
    ratgeber: "einbruchschutz-haustuer",
  },
  {
    slug: "einbruchschaden",
    name: "Einbruchschaden",
    titel: "Einbruchschaden reparieren im Kreis Lippe",
    meta: "Nach einem Einbruch: Wir sichern aufgebrochene Türen und Fenster rund um die Uhr und reparieren den Schaden fachgerecht.",
    kurz: "Aufgebrochene Tür, offene Wohnung. Wir sichern sofort und reparieren danach.",
    bild: { datei: "tuer-reparatur.jpg", alt: "Türband wird mit dem Akkuschrauber an einer Holztür befestigt" },
    icon: "hammer",
    intro:
      "Nach einem Einbruch steht Ihre Wohnung offen, und das ist neben allem anderen ein praktisches Problem, das sofort gelöst werden muss. Wir sichern aufgebrochene Türen und Fenster rund um die Uhr und kümmern uns danach in Ruhe um die eigentliche Reparatur.",
    abschnitte: [
      {
        h2: "Was Sie tun sollten, bevor wir kommen",
        absaetze: [
          "Rufen Sie zuerst die Polizei unter 110 und betreten Sie die Wohnung möglichst nicht. Räumen Sie nichts auf und fassen Sie nichts an, auch wenn der Impuls stark ist. Die Spurensicherung braucht den Zustand so, wie er ist, und Ihre Versicherung später die Dokumentation.",
          "Rufen Sie uns danach an, nicht vorher. Wir kommen in der Regel nach der Polizei, weil wir mit der Sicherung sonst genau die Spuren zerstören würden, die noch gebraucht werden. Fotografieren Sie den Schaden, sobald die Polizei es freigibt. Diese Bilder sind für die Hausratversicherung wertvoller als jede spätere Beschreibung.",
        ],
      },
      {
        h2: "Erst sichern, dann reparieren",
        absaetze: [
          "Diese beiden Schritte gehören getrennt, und das ist in Ihrem Interesse. Die Sicherung passiert sofort und sorgt dafür, dass die Wohnung wieder verschlossen ist: ein Notverschluss an der aufgebrochenen Tür, eine Verbretterung am zerstörten Fenster, ein Austausch des zerstörten Zylinders.",
          "Die eigentliche Instandsetzung machen wir danach zu einem vereinbarten Termin. Dafür gibt es zwei gute Gründe. Erstens brauchen manche Bauteile eine Bestellung. Zweitens klären Sie in der Zwischenzeit mit Ihrer Versicherung, was übernommen wird, und wir können den Schaden vorher sauber dokumentieren. Wer nachts alles in einem Rutsch machen lässt, zahlt mehr und hat schlechtere Unterlagen.",
        ],
      },
      {
        h2: "Die Gelegenheit, es besser zu machen als vorher",
        absaetze: [
          "Wenn eine Tür ohnehin instand gesetzt werden muss, ist das der günstigste Moment, sie gleich sicherer zu machen. Der Monteur ist da, die Tür ist offen, das Schloss kommt sowieso heraus. Ein Sicherheitszylinder mit Schutzbeschlag kostet in diesem Moment einen Bruchteil dessen, was ein separater Termin gekostet hätte.",
          "Viele Hausratversicherungen beteiligen sich außerdem an Nachrüstungen nach einem Einbruch. Fragen Sie danach, bevor Sie beauftragen. Wir stellen Ihnen die Rechnung so aus, dass Ihre Versicherung nachvollziehen kann, was Sicherung, was Reparatur und was Verbesserung war.",
        ],
      },
    ],
    faq: [
      {
        frage: "Kommen Sie auch nachts nach einem Einbruch?",
        antwort:
          "Ja, das ist einer der Fälle, für die es einen Notdienst gibt. Rufen Sie zuerst die Polizei und uns danach, damit wir die Spurensicherung nicht stören.",
      },
      {
        frage: "Zahlt die Versicherung die Notsicherung?",
        antwort:
          "Die Hausratversicherung übernimmt in der Regel die Kosten für die Notsicherung und die Reparatur der Einbruchschäden an Türen und Fenstern. Bewahren Sie die Rechnung auf und melden Sie den Schaden zügig. Fragen Sie im selben Gespräch nach, ob eine Nachrüstung mitgetragen wird.",
      },
      {
        frage: "Wie lange dauert die Notsicherung?",
        antwort:
          "Meist ist die Wohnung innerhalb einer Stunde vor Ort wieder verschlossen. Der Notverschluss ist eine Übergangslösung und ersetzt keine intakte Tür, aber Sie können die Nacht in Ihrer Wohnung verbringen.",
      },
    ],
    verwandt: ["einbruchschutz", "schluesselnotdienst"],
    ratgeber: "einbruchschutz-haustuer",
  },
  {
    slug: "schliessanlagen",
    name: "Schließanlagen",
    titel: "Schließanlagen im Kreis Lippe",
    meta: "Schließanlagen planen, liefern und montieren im Kreis Lippe. Für Mehrfamilienhäuser, Hausverwaltungen, Vereine und Gewerbebetriebe.",
    kurz: "Ein Schlüssel für alle Türen, mit klar geregelten Berechtigungen.",
    bild: { datei: "schliessanlage.jpg", alt: "Schlüssel werden in einem wandmontierten Schlüsselschrank sortiert" },
    icon: "buildings",
    intro:
      "Wenn an einem Schlüsselbund mehr als eine Handvoll Schlüssel hängt und niemand mehr genau weiß, welcher wohin gehört, ist eine Schließanlage die Antwort. Wir planen sie, liefern sie und bauen sie ein, für Mehrfamilienhäuser genauso wie für Werkstätten, Praxen und Vereinsheime.",
    abschnitte: [
      {
        h2: "Was eine Schließanlage eigentlich leistet",
        absaetze: [
          "Eine Schließanlage ordnet Berechtigungen. Statt für jede Tür einen eigenen Schlüssel auszugeben, legen Sie fest, wer wohin darf: Der Mieter öffnet Haustür, Wohnung und seinen Keller, die Reinigungskraft Haustür und Treppenhaus, der Verwalter alles. Jeder trägt genau einen Schlüssel.",
          "Der praktische Gewinn zeigt sich beim Wechsel. Zieht ein Mieter aus und gibt einen Schlüssel nicht zurück, tauschen Sie bei einer gut geplanten Anlage den betroffenen Zylinder und nicht das ganze Haus. Bei einer schlecht geplanten Anlage ist genau das der Moment, in dem es sehr teuer wird. Deshalb steckt die eigentliche Arbeit in der Planung, nicht in der Montage.",
        ],
      },
      {
        h2: "Für wen sich das rechnet",
        absaetze: [
          "Ab etwa fünf Türen wird eine Schließanlage meist wirtschaftlich, und ab dem Moment, in dem regelmäßig Personen wechseln, fast immer.",
        ],
        liste: [
          {
            titel: "Hausverwaltungen und Vermieter",
            text: "Mieterwechsel ohne Komplettaustausch, saubere Schlüsselausgabe mit Quittung, klare Zuständigkeiten im Treppenhaus.",
          },
          {
            titel: "Handwerk und Gewerbe",
            text: "Büro, Lager, Werkstatt und Hof auf einem Schlüssel, mit getrennten Rechten für Auszubildende, Mitarbeiter und Leitung.",
          },
          {
            titel: "Praxen und Kanzleien",
            text: "Abgestufter Zugang zu Archiv, Personalraum und Behandlungszimmern, dokumentiert und nachvollziehbar.",
          },
          {
            titel: "Vereine und Gemeinschaftsräume",
            text: "Viele Nutzer, wechselnde Verantwortliche. Eine Anlage mit Sicherungskarte verhindert den unkontrollierten Nachschlüssel.",
          },
        ],
      },
      {
        h2: "Mechanisch oder elektronisch?",
        absaetze: [
          "Für die allermeisten Objekte im Kreis Lippe ist eine mechanische Anlage die richtige Wahl. Sie braucht keinen Strom, keine Batterie, keine Wartung und funktioniert auch in zwanzig Jahren noch genauso. Wer eine überschaubare Zahl an Türen und Nutzern hat, fährt damit günstiger und zuverlässiger.",
          "Eine elektronische Anlage lohnt sich, wenn sich Berechtigungen häufig ändern oder wenn Sie nachvollziehen müssen, wer wann wo war. Verlorene Transponder sperren Sie am Rechner statt einen Zylinder zu tauschen. Der Preis dafür sind Batterien, Software und eine gewisse Abhängigkeit vom Hersteller. Wir sagen Ihnen offen, welche der beiden Varianten zu Ihrem Objekt passt, und in der Mehrzahl der Fälle ist das die mechanische.",
        ],
      },
    ],
    faq: [
      {
        frage: "Müssen für eine Schließanlage alle Türen getauscht werden?",
        antwort:
          "In der Regel nicht. Meist reicht der Austausch der Zylinder, die Türen und Einsteckschlösser bleiben. Voraussetzung ist, dass die vorhandenen Schlösser in Ordnung sind. Wir prüfen das vor dem Angebot, damit Sie keine Überraschung erleben.",
      },
      {
        frage: "Was passiert, wenn ein Schlüssel verloren geht?",
        antwort:
          "Bei einer gut geplanten Anlage tauschen Sie nur die Zylinder, die dieser Schlüssel öffnen konnte. Deshalb planen wir Anlagen so, dass Schadensfälle begrenzt bleiben. Zusätzlich empfehlen wir eine Schlüsselausgabe mit Quittung, damit im Ernstfall klar ist, wer was hatte.",
      },
      {
        frage: "Wie lange dauert es von der Anfrage bis zur Montage?",
        antwort:
          "Die Planung machen wir vor Ort, meist in einem Termin. Die Fertigung der Anlage beim Hersteller braucht danach einige Werktage, weil jeder Zylinder individuell geschlossen wird. Die Montage selbst ist dann schnell erledigt.",
      },
    ],
    verwandt: ["schloss-zylinder-wechseln", "einbruchschutz"],
  },
];

export const leistungBySlug = (slug: string) =>
  leistungen.find((l) => l.slug === slug);
