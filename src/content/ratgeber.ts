/**
 * Ratgeber-Beiträge. Cluster C aus dem SEO-KEYWORD-PLAN.
 *
 * Zweck: informationale Keywords abdecken, die vor dem Anruf gesucht werden,
 * und als zitierfähige Passagen für AI Overviews und Perplexity dienen.
 * Jeder Beitrag verlinkt auf mindestens zwei Leistungsseiten.
 */

export interface RatgeberAbschnitt {
  h2: string;
  absaetze: string[];
  liste?: { titel: string; text: string }[];
}

export interface Ratgeber {
  slug: string;
  titel: string;
  meta: string;
  /** Anreißer für Karten und Übersichten. */
  kurz: string;
  /** Kurzes Label für Footer und Navigation. */
  navLabel: string;
  /** Lesezeit in Minuten, ehrlich geschätzt. */
  lesezeit: number;
  /** Die Kernantwort in zwei bis drei Sätzen, steht ganz oben. */
  kernantwort: string;
  abschnitte: RatgeberAbschnitt[];
  /** Slugs der verlinkten Leistungsseiten. */
  leistungen: string[];
}

export const ratgeber: Ratgeber[] = [
  {
    slug: "schluesseldienst-kosten",
    titel: "Was kostet ein Schlüsseldienst wirklich?",
    meta: "Was ein Schlüsseldienst kosten darf: Richtwerte der Verbände, übliche Zuschläge und woran Sie einen überhöhten Preis erkennen.",
    navLabel: "Was ein Schlüsseldienst kostet",
    kurz: "Richtwerte der Verbände, übliche Zuschläge und die Grenze, ab der es unseriös wird.",
    lesezeit: 4,
    kernantwort:
      "Eine einfache Türöffnung kostet in Deutschland im Schnitt rund 137 €. Der Bundesverband Metall bezeichnet alles über 127 € als zu teuer, der Bundesverband Sicherheitstechnik nennt rund 100 € angemessen. Nachts und am Wochenende sind am Markt Zuschläge von 50 bis 150 Prozent üblich. Bei uns kostet die Türöffnung 89 € tagsüber und 129 € nachts, jeweils inklusive Anfahrt und Mehrwertsteuer.",
    abschnitte: [
      {
        h2: "Woraus sich der Preis zusammensetzt",
        absaetze: [
          "Eine Schlüsseldienstrechnung besteht aus bis zu vier Posten: der Einsatzpauschale für die Arbeit selbst, der Anfahrt, einem eventuellen Zeitzuschlag für Nacht, Wochenende oder Feiertag und dem Material, falls etwas ersetzt werden musste. Seriöse Anbieter machen alle vier Posten am Telefon transparent, unseriöse nennen nur den ersten.",
          "Genau in dieser Aufteilung liegt die Masche. Ein Lockangebot von 19 € meint die nackte Einsatzpauschale. Dazu kommen dann Anfahrt, Zuschläge und pauschal berechnetes Material, und am Ende steht eine dreistellige Summe auf der Rechnung, die formal sogar korrekt aufgeschlüsselt ist. Fragen Sie deshalb nie nach dem Preis für die Türöffnung, sondern nach dem Gesamtbetrag, den Sie am Ende zahlen.",
        ],
      },
      {
        h2: "Die Richtwerte der Verbände",
        absaetze: [
          "Es gibt keine gesetzliche Preisbindung für Schlüsseldienste, aber es gibt anerkannte Richtwerte, auf die Sie sich im Streitfall berufen können.",
        ],
        liste: [
          {
            titel: "Rund 100 € gelten als angemessen",
            text: "So die Einschätzung des Bundesverbands Sicherheitstechnik für eine einfache Türöffnung.",
          },
          {
            titel: "Über 127 € ist zu teuer",
            text: "Der Bundesverband Metall zieht hier die Grenze für eine einfache Türöffnung.",
          },
          {
            titel: "137 € werden im Schnitt abgerechnet",
            text: "Der tatsächliche Bundesdurchschnitt liegt damit über dem, was die Verbände für vertretbar halten.",
          },
          {
            titel: "50 bis 150 Prozent Nachtzuschlag sind üblich",
            text: "Am Markt verbreitet. Aus 100 € werden so schnell 250 €, ohne dass formal etwas falsch wäre.",
          },
        ],
      },
      {
        h2: "Was Sie am Telefon fragen sollten",
        absaetze: [
          "Vier Fragen, die zusammen weniger als eine Minute kosten und Ihnen im Zweifel dreistellige Beträge sparen: Was kostet der Einsatz insgesamt, inklusive Anfahrt und aller Zuschläge? Sitzt Ihre Firma hier vor Ort, und unter welcher Adresse? Was kostet ein Zylinder, falls einer gebraucht wird? Bekomme ich eine Rechnung, und kann ich mit Karte zahlen?",
          "Wenn eine dieser Fragen ausweichend beantwortet wird, legen Sie auf und rufen Sie woanders an. Ein Betrieb, der seine Preise kennt, nennt sie. Wer am Telefon sagt, das könne man erst vor Ort sehen, meint damit in aller Regel, dass er vor Ort einen Preis nennen will, dem Sie in Ihrer Lage schlecht widersprechen können.",
        ],
      },
      {
        h2: "Wenn die Rechnung zu hoch ist",
        absaetze: [
          "Zahlen Sie unter Vorbehalt und schreiben Sie das auf die Quittung, wenn Sie vor Ort unter Druck gesetzt werden. Damit behalten Sie die Möglichkeit, den Betrag später zurückzufordern. Unterschreiben Sie nichts, was Sie nicht gelesen haben, und lassen Sie sich keine Blankoquittung andrehen.",
          "Ein Preis, der in einem auffälligen Missverhältnis zur Leistung steht, kann sittenwidrig und damit nichtig sein. Die Verbraucherzentrale hilft bei der Einschätzung weiter. Wichtig ist: Bestehen Sie immer auf einer Rechnung mit vollständigem Firmennamen und ladungsfähiger Anschrift. Ohne die haben Sie später niemanden, an den Sie sich wenden können, und genau darauf setzen unseriöse Anbieter.",
        ],
      },
    ],
    leistungen: ["tueroeffnung", "schluesselnotdienst"],
  },
  {
    slug: "ausgesperrt-was-tun",
    titel: "Ausgesperrt: was Sie tun sollten, bevor Sie anrufen",
    meta: "Ausgesperrt und der Schlüssel liegt drinnen? Fünf Dinge, die Sie zuerst prüfen sollten, und wann der Anruf beim Schlüsseldienst wirklich nötig ist.",
    navLabel: "Ausgesperrt: was tun?",
    kurz: "Fünf Dinge, die Sie zuerst prüfen. Und wann der Anruf wirklich nötig ist.",
    lesezeit: 3,
    kernantwort:
      "Prüfen Sie zuerst alle anderen Zugänge, fragen Sie nach einem hinterlegten Zweitschlüssel und klären Sie, ob Ihre Hausverwaltung oder Ihr Vermieter einen hat. Erst danach lohnt der Anruf beim Schlüsseldienst. Wenn ein Kind, ein Tier oder eine hilfebedürftige Person in der Wohnung ist oder der Herd an ist, überspringen Sie diese Schritte und rufen Sie sofort an.",
    abschnitte: [
      {
        h2: "Zuerst: durchatmen und prüfen",
        absaetze: [
          "Der erste Impuls ist, sofort zum Handy zu greifen. Zwei Minuten Prüfen sparen Ihnen im besten Fall den ganzen Einsatz.",
        ],
        liste: [
          {
            titel: "Alle Türen durchgehen",
            text: "Terrassentür, Balkontür, Kellertür, Garagentür, Nebeneingang. Besonders bei Häusern ist einer dieser Zugänge überraschend oft offen.",
          },
          {
            titel: "Zweitschlüssel-Runde",
            text: "Partner, Kinder, Eltern, Nachbarn. Überlegen Sie ruhig zweimal, wer vor Jahren einmal einen Schlüssel bekommen hat.",
          },
          {
            titel: "Hausverwaltung oder Vermieter",
            text: "In Mehrfamilienhäusern liegt oft ein Schlüssel bei der Verwaltung. Tagsüber ist das der schnellste und billigste Weg.",
          },
          {
            titel: "Fenster prüfen, aber nicht einsteigen",
            text: "Ein gekipptes Fenster im Erdgeschoss ist kein Einstieg. Jedes Jahr verletzen sich Menschen bei genau diesem Versuch schwer.",
          },
          {
            titel: "Ist die Tür wirklich abgeschlossen?",
            text: "Drücken Sie die Klinke kräftig herunter und schieben Sie die Tür an. Manchmal klemmt sie nur, statt verschlossen zu sein.",
          },
        ],
      },
      {
        h2: "Was Sie auf keinen Fall tun sollten",
        absaetze: [
          "Versuchen Sie nicht, die Tür mit einer Scheckkarte oder einem Draht selbst zu öffnen. Bei modernen Türen funktioniert es praktisch nie, dafür beschädigen Sie die Schlossfalle oder brechen etwas im Zylinder ab. Aus einer Türöffnung wird dann eine Türöffnung plus Schlossreparatur.",
          "Rufen Sie außerdem nicht die erste Nummer an, die bei der Suche ganz oben steht. Bezahlte Anzeigen und bundesweite Vermittlungsportale stehen dort systematisch vorne. Scrollen Sie ein Stück weiter und suchen Sie einen Anbieter mit Ortsvorwahl und einer richtigen Adresse im Impressum. Der ist erfahrungsgemäß nicht nur billiger, sondern auch schneller da.",
        ],
      },
      {
        h2: "Wann Sie sofort anrufen sollten",
        absaetze: [
          "In manchen Situationen ist das Abwägen vorbei. Wenn ein Kind oder ein Haustier allein in der Wohnung ist, wenn eine pflegebedürftige Person drinnen ist, wenn der Herd oder der Backofen läuft, wenn Wasser läuft oder wenn Sie dringend an Medikamente müssen, rufen Sie sofort an und sagen Sie das gleich im ersten Satz.",
          "Solche Einsätze ziehen wir vor. Und wenn tatsächlich Gefahr für Leib und Leben besteht, ist nicht der Schlüsseldienst die erste Nummer, sondern die 112. Die Feuerwehr öffnet in Notlagen ebenfalls Türen, und zwar unabhängig davon, ob ein Schlüsseldienst gerade frei ist.",
        ],
      },
    ],
    leistungen: ["tueroeffnung", "schluesselnotdienst"],
  },
  {
    slug: "unserioesen-schluesseldienst-erkennen",
    titel: "Unseriösen Schlüsseldienst erkennen: sieben Warnzeichen",
    meta: "Woran Sie einen unseriösen Schlüsseldienst erkennen: Lockpreise, 0800-Nummern, fehlendes Impressum. Sieben Warnzeichen und was Sie stattdessen prüfen.",
    navLabel: "Abzocke erkennen",
    kurz: "Lockpreise, 0800-Nummern, fehlende Adresse. Woran Sie die Abzocke erkennen.",
    lesezeit: 5,
    kernantwort:
      "Die deutlichsten Warnzeichen sind ein Lockpreis unter 50 €, eine 0800- oder Mobilfunknummer statt einer Ortsvorwahl, ein Impressum ohne ladungsfähige Adresse am Ort und die Weigerung, am Telefon einen Gesamtpreis zu nennen. Wer eine Ortsvorwahl hat, eine echte Adresse nennt und den Preis vorab sagt, ist mit hoher Wahrscheinlichkeit seriös.",
    abschnitte: [
      {
        h2: "Wie die Masche funktioniert",
        absaetze: [
          "Ein großer Teil der Treffer bei der Suche nach einem Schlüsseldienst führt nicht zu einem Handwerksbetrieb, sondern zu einer Vermittlungszentrale. Die nimmt Ihren Anruf entgegen, gibt den Auftrag an einen Subunternehmer weiter und behält eine Provision. Diese Provision zahlen am Ende Sie, weil sie in die Rechnung eingerechnet wird.",
          "Deshalb sind diese Portale auf Lockpreise angewiesen. Der beworbene Betrag von 19 oder 29 € reicht nicht einmal für die Fahrtkosten, geschweige denn für die Provision. Er hat nur einen Zweck: Sie sollen anrufen. Was dann tatsächlich abgerechnet wird, erfahren Sie in dem Moment, in dem die Tür offen ist und Ihre Verhandlungsposition denkbar schlecht ist.",
        ],
      },
      {
        h2: "Die sieben Warnzeichen",
        absaetze: [
          "Jedes einzelne davon ist ein Grund, das Gespräch zu beenden und woanders anzurufen. Mehrere zusammen sind eindeutig.",
        ],
        liste: [
          {
            titel: "Lockpreis unter 50 €",
            text: "Kein Betrieb fährt für diesen Betrag mit einem ausgestatteten Fahrzeug und einem bezahlten Monteur zu Ihnen. Der Preis ist ein Köder, kein Angebot.",
          },
          {
            titel: "0800- oder Mobilfunknummer",
            text: "Ein ortsansässiger Handwerksbetrieb hat einen Festnetzanschluss mit Ortsvorwahl. Eine kostenlose Servicenummer deutet auf eine überregionale Zentrale hin.",
          },
          {
            titel: "Impressum ohne echte Adresse",
            text: "Prüfen Sie es, bevor Sie anrufen. Postfach, Briefkastenadresse oder eine Anschrift am anderen Ende der Republik sind ein Ausschlusskriterium.",
          },
          {
            titel: "Kein Gesamtpreis am Telefon",
            text: "Wer sagt, das könne man erst vor Ort sehen, will den Preis nennen, wenn Sie nicht mehr Nein sagen können.",
          },
          {
            titel: "Ortsname in der Domain, aber kein Ortsbezug",
            text: "Eine Domain mit Ihrem Stadtnamen ist in zehn Minuten registriert. Entscheidend ist das Impressum, nicht die Adresszeile im Browser.",
          },
          {
            titel: "Sofortige Bohrankündigung",
            text: "Wenn der Monteur ohne ernsthaften Versuch zur Bohrmaschine greift, wird ein Zylinder verkauft, nicht eine Tür geöffnet.",
          },
          {
            titel: "Nur Bargeld, keine Rechnung",
            text: "Ohne Rechnung mit vollständigem Firmennamen und Anschrift haben Sie hinterher niemanden, an den Sie sich wenden können. Genau das ist der Zweck.",
          },
        ],
      },
      {
        h2: "Was Sie stattdessen prüfen",
        absaetze: [
          "Die Gegenprobe ist unspektakulär und dauert zwei Minuten. Schauen Sie ins Impressum: Steht dort ein Name, eine Straße, eine Hausnummer und eine Postleitzahl, die zu Ihrer Region passt? Gibt es eine Handwerksrollennummer oder eine Umsatzsteuer-Identifikationsnummer? Hat die Telefonnummer eine Ortsvorwahl?",
          "Fragen Sie dann am Telefon nach dem Gesamtpreis inklusive Anfahrt und Zuschlägen und danach, was ein Zylinder kostet, falls einer nötig wird. Ein Betrieb, der vor Ort arbeitet und dort auch morgen noch arbeiten will, beantwortet das ohne Zögern. Für ihn ist der Ruf im Ort die Geschäftsgrundlage, und das ist der beste Schutz, den Sie als Kunde haben können.",
        ],
      },
      {
        h2: "Wenn es schon passiert ist",
        absaetze: [
          "Zahlen Sie unter Vorbehalt und vermerken Sie das schriftlich auf der Quittung. Fotografieren Sie die Rechnung, das Fahrzeug und wenn möglich das Kennzeichen. Notieren Sie sich Uhrzeit und Dauer des Einsatzes und was genau gemacht wurde.",
          "Melden Sie sich danach bei der Verbraucherzentrale. Ein Preis, der in einem auffälligen Missverhältnis zur erbrachten Leistung steht, kann sittenwidrig und damit nichtig sein. Bei massiver Drucksituation an der Wohnungstür kommt auch eine Anzeige in Betracht. Wichtig ist, dass Sie nicht aus Scham darauf verzichten: Diese Fälle funktionieren genau deshalb so gut, weil die meisten Betroffenen sie auf sich beruhen lassen.",
        ],
      },
    ],
    leistungen: ["tueroeffnung", "schluesselnotdienst"],
  },
  {
    slug: "schluessel-verloren",
    titel: "Schlüssel verloren: wer zahlt und was jetzt zu tun ist",
    meta: "Schlüssel verloren? Was Sie sofort tun sollten, wann ein Schlosswechsel nötig ist und wer bei Mietwohnungen die Kosten trägt.",
    navLabel: "Schlüssel verloren",
    kurz: "Sofortmaßnahmen, Schlosswechsel und die Frage, wer bei Mietwohnungen zahlt.",
    lesezeit: 4,
    kernantwort:
      "Wenn der verlorene Schlüssel einer Adresse zugeordnet werden kann, besteht Missbrauchsgefahr und das Schloss sollte gewechselt werden. In Mietwohnungen haftet der Mieter, sofern ihn ein Verschulden trifft. Der Vermieter darf die Kosten für einen Anlagentausch aber nur verlangen, wenn er ihn tatsächlich durchführen lässt. Eine Privathaftpflichtversicherung deckt Schlüsselverlust häufig ab.",
    abschnitte: [
      {
        h2: "Die entscheidende Frage: Kann jemand die Tür zuordnen?",
        absaetze: [
          "Ob ein Schlosswechsel nötig ist, hängt vor allem daran, ob der Finder wissen kann, wohin der Schlüssel gehört. Ein Schlüsselbund mit Adressanhänger oder zusammen mit dem Portemonnaie samt Ausweis verloren: Da besteht eindeutig Missbrauchsgefahr, und das Schloss sollte getauscht werden.",
          "Ein einzelner Schlüssel ohne jeden Hinweis auf die Wohnung, verloren irgendwo in der Innenstadt, ist ein anderer Fall. Hier ist die Gefahr gering. Und wenn der Schlüssel nachweislich dort gelandet ist, wo ihn niemand mehr herausholt, etwa im See, entfällt die Missbrauchsgefahr ganz. Diese Unterscheidung ist nicht akademisch, sie entscheidet darüber, wer die Kosten trägt.",
        ],
      },
      {
        h2: "Was Sie sofort tun sollten",
        absaetze: [
          "In dieser Reihenfolge, und zwar zügig. Die Frist spielt später bei der Versicherung eine Rolle.",
        ],
        liste: [
          {
            titel: "Fundbüro und Verlustmeldung",
            text: "Melden Sie den Verlust beim Fundbüro und, wenn andere Wertsachen dabei waren, bei der Polizei. Sie brauchen später einen Nachweis, dass Sie gehandelt haben.",
          },
          {
            titel: "Vermieter oder Verwaltung informieren",
            text: "Bei Mietwohnungen sofort, nicht erst nach dem Wochenende. Verzögerung kann Ihnen als Pflichtverletzung ausgelegt werden.",
          },
          {
            titel: "Versicherung melden",
            text: "Viele Privathaftpflichttarife decken Schlüsselverlust ab, oft auch fremde Schlüssel und Schließanlagen. Melden Sie den Schaden innerhalb der Frist Ihrer Police.",
          },
          {
            titel: "Zylinder tauschen lassen",
            text: "Wenn Missbrauchsgefahr besteht, warten Sie damit nicht. Der Tausch dauert Minuten und kostet weniger, als die meisten annehmen.",
          },
        ],
      },
      {
        h2: "Wer zahlt in der Mietwohnung?",
        absaetze: [
          "Grundsätzlich haftet der Mieter für den Verlust, wenn ihn ein Verschulden trifft. Wurde Ihnen die Tasche gestohlen und der Schlüssel war nicht der Wohnung zuzuordnen, fehlt es am Verschulden und an der Missbrauchsgefahr. Dann tragen Sie auch nicht die Kosten.",
          "Ein Punkt, den viele Vermieter anders sehen als die Gerichte: Der Vermieter kann die Kosten für den Austausch einer Schließanlage nur verlangen, wenn er sie tatsächlich austauschen lässt. Eine fiktive Abrechnung, also Geld für einen Austausch, der nie stattfindet, ist nicht zulässig. Lassen Sie sich im Zweifel den Beleg zeigen, bevor Sie zahlen.",
        ],
      },
      {
        h2: "Der Ausnahmefall: die Schließanlage",
        absaetze: [
          "Richtig teuer wird es, wenn der verlorene Schlüssel zu einer Schließanlage gehört, also zu einem System, in dem ein Schlüssel mehrere Türen öffnet. Dann ist im schlimmsten Fall nicht ein Zylinder betroffen, sondern das gesamte Haus, und die Summen erreichen schnell einen vierstelligen Bereich.",
          "Deshalb zwei Empfehlungen: Prüfen Sie beim Einzug in ein Mehrfamilienhaus, ob eine Schließanlage vorliegt, und prüfen Sie dann Ihre Haftpflichtversicherung darauf, ob Schließanlagen mitversichert sind. Viele ältere Tarife decken nur einzelne Schlüssel ab. Die Nachbesserung kostet wenige Euro im Jahr und ist eine der sinnvollsten Anpassungen überhaupt.",
        ],
      },
    ],
    leistungen: ["schloss-zylinder-wechseln", "tueroeffnung"],
  },
  {
    slug: "einbruchschutz-haustuer",
    titel: "Haustür sichern: was wirklich hilft",
    meta: "Haustür gegen Einbruch sichern: welche Nachrüstungen wirken, worauf es bei Zylinder und Beschlag ankommt und was nichts kostet.",
    navLabel: "Haustür sichern",
    kurz: "Welche Nachrüstungen wirken, worauf es beim Zylinder ankommt, was nichts kostet.",
    lesezeit: 5,
    kernantwort:
      "Am wirksamsten an der Haustür ist die Kombination aus einem Sicherheitszylinder mit Zieh- und Bohrschutz und einem Schutzbeschlag, der den Zylinder abdeckt. Eines ohne das andere bringt wenig. Die Polizei empfiehlt für Wohnhäuser die Widerstandsklasse RC2. Am meisten bringt allerdings etwas, das nichts kostet: konsequent abschließen statt nur zuziehen.",
    abschnitte: [
      {
        h2: "Warum Zylinder und Beschlag zusammengehören",
        absaetze: [
          "Die beiden häufigsten Angriffe auf ein Türschloss sind das Abziehen und das Abbrechen des Zylinders. Beides setzt an dem Stück an, das außen aus der Tür herausschaut. Ein Sicherheitszylinder hat dagegen innere Verstärkungen und Bohrschutz, ein Schutzbeschlag deckt ihn zusätzlich ab, sodass gar kein Werkzeug ansetzen kann.",
          "Getrennt betrachtet ist jede der beiden Maßnahmen nur die halbe Miete. Ein teurer Sicherheitszylinder, der zwei Zentimeter übersteht und frei zugänglich ist, lässt sich mit dem passenden Werkzeug abziehen. Ein Schutzbeschlag über einem billigen Zylinder schützt gegen das Abziehen, aber nicht gegen das Aufsperren. Die Kombination ist die wirksamste Einzelinvestition an einer Haustür, und sie bewegt sich im überschaubaren dreistelligen Bereich.",
        ],
      },
      {
        h2: "Die richtige Länge ist wichtiger als der Preis",
        absaetze: [
          "Ein Zylinder darf außen höchstens drei Millimeter überstehen. Jeder Millimeter darüber ist eine Angriffsfläche. Das ist der Punkt, an dem die meisten selbst durchgeführten Zylindertausche scheitern: Im Baumarkt wird nach Gefühl gegriffen, die Türstärke nie gemessen, und am Ende steht ein hochwertiger Zylinder anderthalb Zentimeter aus der Tür heraus.",
          "Messen Sie die Türstärke, bevor Sie irgendetwas kaufen, oder lassen Sie es messen. Ein passend gewählter Zylinder der mittleren Preisklasse schützt besser als ein zu langer Zylinder der teuersten.",
        ],
      },
      {
        h2: "Was noch hilft, und was nicht",
        absaetze: [
          "Eine ehrliche Einordnung der gängigen Maßnahmen, von wirksam bis überschätzt.",
        ],
        liste: [
          {
            titel: "Wirksam: Mehrfachverriegelung",
            text: "Mehrere Verriegelungspunkte über die Türhöhe statt nur einem. Macht das Aufhebeln erheblich aufwendiger.",
          },
          {
            titel: "Wirksam: Querriegelschloss",
            text: "Sichert die Tür über die volle Breite bis in die Laibung. Besonders bei schwachem Rahmen oder Kellertüren sinnvoll.",
          },
          {
            titel: "Wirksam: Bandseitensicherung",
            text: "Sichert die Scharnierseite. Wird fast immer vergessen, obwohl die Tür dort genauso ausgehebelt werden kann.",
          },
          {
            titel: "Wirksam und kostenlos: abschließen",
            text: "Zweimal umdrehen statt zuziehen. Erst dann fahren die Riegel aus. Die beste Maßnahme, die es gibt, und sie kostet drei Sekunden.",
          },
          {
            titel: "Überschätzt: die Alarmanlage allein",
            text: "Sie meldet, dass jemand drin ist. Verhindern, dass er hineinkommt, tut sie nicht. Erst Mechanik, dann Elektronik.",
          },
          {
            titel: "Überschätzt: der Zaun",
            text: "Hohe Hecken und blickdichte Zäune schützen den Einbrecher vor Beobachtung, nicht Sie vor dem Einbruch.",
          },
        ],
      },
      {
        h2: "Die Beratung, die nichts kostet",
        absaetze: [
          "Die Polizei bietet über ihre Beratungsstellen eine kostenlose und herstellerneutrale Sicherheitsberatung an, auf Wunsch auch bei Ihnen zu Hause. Wir empfehlen das ausdrücklich, obwohl wir daran nichts verdienen. Die Polizei hat nichts zu verkaufen, und ihre Einschätzung ist ein guter Gegencheck zu jedem Angebot, das Sie bekommen, auch zu unserem.",
          "Zur Förderung: Den direkten KfW-Investitionszuschuss für Einbruchschutz gibt es seit 2023 nicht mehr. Möglich bleibt die Finanzierung über den KfW-Kredit 159 (Altersgerecht Umbauen), der Einbruchschutz einschließt, sowie eine Förderung im Rahmen der BEG, wenn Fenster oder Außentüren ohnehin erneuert werden. Der Stand ändert sich, prüfen Sie ihn vor einer Investition direkt bei der KfW.",
        ],
      },
    ],
    leistungen: ["einbruchschutz", "einbruchschaden"],
  },
];

export const ratgeberBySlug = (slug: string) =>
  ratgeber.find((r) => r.slug === slug);
