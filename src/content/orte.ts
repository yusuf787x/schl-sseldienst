/**
 * Einsatzgebiet. Jeder Ort hat individuell geschriebenen Text.
 *
 * Wichtig: Diese Seiten sind bewusst KEINE Platzhalter-Vorlagen mit
 * ausgetauschtem Ortsnamen. Google stuft so etwas als Doorway Pages ein
 * und wirft sie aus dem Index. Jeder `intro` und `lokal` ist eigener Text
 * mit echtem Ortsbezug.
 *
 * Bielefeld ist bewusst nicht enthalten (Wunsch des Betreibers, zudem
 * eigener Markt außerhalb des Kreises Lippe).
 */

export type OrtTyp = "ortsteil" | "nachbarstadt";

export interface Ort {
  slug: string;
  name: string;
  typ: OrtTyp;
  plz: string;
  /** Einleitung auf der Ortsseite, 2 bis 3 Sätze. Erscheint direkt unter der H1. */
  intro: string;
  /** Absatz zur örtlichen Bausubstanz und typischen Tür-/Schlosssituation. */
  lokal: string;
  /** Ortsspezifische Frage für den FAQ-Block. */
  faq: { frage: string; antwort: string };
  /** Nachbarorte für die interne Verlinkung. */
  nachbarn: string[];
}

export const orte: Ort[] = [
  // ─────────────────────────────────────────────────────────────
  // Ortsteile von Lage
  // ─────────────────────────────────────────────────────────────
  {
    slug: "hoerste",
    name: "Hörste",
    typ: "ortsteil",
    plz: "32791",
    intro:
      "Hörste ist der südlichste Ortsteil von Lage und liegt schon am Fuß des Teutoburger Waldes. Wir sind von der Kastanienstraße aus in wenigen Minuten bei Ihnen, und die Anfahrt kostet Sie nichts extra.",
    lokal:
      "In Hörste stehen viele freistehende Einfamilienhäuser mit eigener Haustür zur Straße, dazu einige ältere Hofstellen am Ortsrand. Bei freistehenden Häusern gibt es selten einen Nachbarn mit Zweitschlüssel im selben Flur, und ein Kellerfenster als Notweg ist meistens auch keine Option. Genau deshalb landen Anrufe aus Hörste oft bei uns statt beim Nachbarn. Bei älteren Hoftüren finden wir häufig Schlösser, die seit Jahrzehnten nicht angerührt wurden. Wenn der Zylinder beim Öffnen auffällig schwergängig ist, sagen wir Ihnen das, und Sie entscheiden, ob er gleich mitgewechselt werden soll.",
    faq: {
      frage: "Kommen Sie auch zu den einzeln liegenden Höfen außerhalb von Hörste?",
      antwort:
        "Ja. Auch die Einzellagen am Ortsrand und Richtung Teutoburger Wald gehören zu unserem Gebiet, und die Anfahrt bleibt im Festpreis enthalten. Sagen Sie am Telefon am besten kurz, wie wir zufahren können, das spart uns beiden Zeit.",
    },
    nachbarn: ["billinghausen", "hardissen", "oerlinghausen"],
  },
  {
    slug: "heiden",
    name: "Heiden",
    typ: "ortsteil",
    plz: "32791",
    intro:
      "Heiden liegt im Nordwesten von Lage, ländlich und weitläufig. Unser Schlüsselnotdienst fährt auch die Einzellagen zwischen den Feldern an, ohne dass sich der Preis dadurch ändert.",
    lokal:
      "Die Bebauung in Heiden ist stark durchmischt: gewachsene Hofstellen, Häuser aus den Siebzigern und einzelne Neubauten. Entsprechend unterschiedlich sind die Türen. An älteren Nebeneingängen und Scheunentüren treffen wir noch Buntbartschlösser an, an neueren Haustüren dagegen Mehrfachverriegelungen, bei denen beim Zuziehen gleich mehrere Punkte greifen. Für uns macht das beim Vorgehen einen echten Unterschied. Wenn Sie am Telefon grob beschreiben können, wie alt die Tür ist und ob sie nur zugefallen oder wirklich abgeschlossen ist, ist der Monteur schon vor der Abfahrt im Bilde.",
    faq: {
      frage: "Finden Sie die Adresse auch abends, wenn die Hofeinfahrt unbeleuchtet ist?",
      antwort:
        "In der Regel ja. Wenn Sie sich unsicher sind, nennen Sie uns am Telefon einen Anhaltspunkt in der Nähe und schalten Sie, wenn möglich, das Außenlicht ein. Bei einzeln liegenden Höfen in Heiden hilft das erfahrungsgemäß mehr als jede Navigationsangabe.",
    },
    nachbarn: ["kachtenhausen", "waddenhausen", "leopoldshoehe"],
  },
  {
    slug: "muessen",
    name: "Müssen",
    typ: "ortsteil",
    plz: "32791",
    intro:
      "Müssen gehört zu den kleineren Ortsteilen von Lage und liegt im Süden Richtung Oerlinghausen. Kurze Wege für uns, fester Preis für Sie, unabhängig von der Uhrzeit.",
    lokal:
      "Müssen ist überwiegend von Wohnhäusern mit Garten und einzelnen landwirtschaftlichen Anwesen geprägt. Auffällig häufig rufen uns hier Menschen an, die nicht die Haustür, sondern die Terrassen- oder Nebeneingangstür zugezogen haben, während der Schlüssel drinnen lag. Terrassentüren haben oft gar keinen Außengriff und lassen sich von außen grundsätzlich nicht bedienen. Das ist kein Problem, aber es ändert unser Vorgehen: Wir gehen dann über die Haupteingangstür, nicht über die Terrassentür. Sagen Sie uns also ruhig gleich am Telefon, welche Tür genau zu ist.",
    faq: {
      frage: "Ich habe mich auf der Terrasse ausgesperrt und mein Handy ist drinnen. Was nun?",
      antwort:
        "Fragen Sie einen Nachbarn, ob Sie kurz telefonieren dürfen. Bleiben Sie am besten vor Ort, damit Sie uns die Tür zeigen können. Falls jemand in der Wohnung ist, der die Tür nicht öffnen kann, etwa ein Kleinkind, sagen Sie uns das sofort. Solche Einsätze ziehen wir vor.",
    },
    nachbarn: ["billinghausen", "pottenhausen", "hoerste"],
  },
  {
    slug: "kachtenhausen",
    name: "Kachtenhausen",
    typ: "ortsteil",
    plz: "32791",
    intro:
      "Kachtenhausen liegt im Norden von Lage Richtung Leopoldshöhe und hat einen eigenen gewachsenen Ortskern. Wir öffnen hier rund um die Uhr Türen, zum selben Festpreis wie im Rest des Kreises Lippe.",
    lokal:
      "Rund um den Ortskern von Kachtenhausen steht viel Bestand aus den Sechzigern und Siebzigern, am Rand sind in den letzten Jahren Neubauten dazugekommen. Dieser Mix zeigt sich direkt an den Haustüren. In den Neubaugebieten treffen wir moderne Mehrfachverriegelungen mit Sicherheitszylinder an, im Altbestand oft noch den ursprünglichen Zylinder von der Bauabnahme. Falls Sie ein älteres Haus in Kachtenhausen gekauft haben: Ein Zylinderwechsel nach dem Einzug ist keine Panikmache, sondern schlicht sinnvoll. Niemand weiß, wie viele Schlüssel über die Jahrzehnte im Umlauf waren.",
    faq: {
      frage: "Wir sind gerade eingezogen. Sollten wir die Schlösser tauschen lassen?",
      antwort:
        "Bei einem Hauskauf raten wir klar dazu. Sie wissen nicht, wer über die Jahre alles einen Schlüssel bekommen hat, und der Vorbesitzer meist auch nicht mehr. Bei einer Mietwohnung ist der Vermieter zuständig, sprechen Sie das vorher ab. Ein Zylindertausch ist in wenigen Minuten erledigt und deutlich günstiger, als die meisten erwarten.",
    },
    nachbarn: ["heiden", "ehrentrup", "leopoldshoehe"],
  },
  {
    slug: "waddenhausen",
    name: "Waddenhausen",
    typ: "ortsteil",
    plz: "32791",
    intro:
      "Waddenhausen liegt westlich von Lage Richtung Bad Salzuflen, an der Werre. Wenn Sie hier vor der Tür stehen, brauchen Sie einen Anruf, und wir nennen Ihnen den Preis, bevor wir losfahren.",
    lokal:
      "Waddenhausen ist stark von Ein- und Zweifamilienhäusern geprägt, viele davon mit Anbauten und nachträglich eingebauten Türen. Nachträglich gesetzte Türen sind für uns die interessanteren Fälle: Sie sind manchmal nicht ganz sauber justiert, verziehen sich über die Jahre und klemmen dann irgendwann im Rahmen. Wer morgens den Schlüssel zweimal drehen muss, damit sich etwas tut, hat meistens kein Schlossproblem, sondern ein Türproblem. Oft reicht ein Nachjustieren der Schließbleche, und der Zylinder bleibt, wie er ist. Das sagen wir Ihnen auch dann, wenn es für uns der kleinere Auftrag ist.",
    faq: {
      frage: "Meine Haustür klemmt seit Wochen. Ist das ein Fall für den Notdienst?",
      antwort:
        "Nein, das ist zum Glück kein Notfall, sondern etwas, das man in Ruhe zu einem vereinbarten Termin erledigt. Rufen Sie tagsüber an. Eine klemmende Tür ist übrigens eine Vorwarnung: Wer sie ignoriert, steht irgendwann davor, ohne reinzukommen.",
    },
    nachbarn: ["heiden", "hardissen", "bad-salzuflen"],
  },
  {
    slug: "pottenhausen",
    name: "Pottenhausen",
    typ: "ortsteil",
    plz: "32791",
    intro:
      "Pottenhausen liegt im Südwesten von Lage an der Grenze zu Leopoldshöhe und Oerlinghausen. Für uns eine kurze Anfahrt, für Sie ein Festpreis ohne Nacht- oder Wochenendzuschlag.",
    lokal:
      "In Pottenhausen mischen sich Wohnbebauung und landwirtschaftlich genutzte Gebäude. Neben Haustüren öffnen wir hier vergleichsweise oft Werkstatt-, Garagen- und Scheunentüren, und das sind andere Baustellen. An Nebengebäuden hängen häufig noch einfache Vorhangschlösser oder alte Einsteckschlösser, die über Jahre der Witterung ausgesetzt waren. Wenn so ein Schloss festsitzt, ist Gewalt selten die Lösung und Kriechöl oft nur eine Verlängerung des Problems. Wir schauen uns das an und sagen Ihnen offen, ob sich eine Reparatur noch lohnt oder ob ein neues Schloss die ehrlichere Antwort ist.",
    faq: {
      frage: "Öffnen Sie auch Garagen, Werkstätten und Scheunen?",
      antwort:
        "Ja. Sie müssen uns nur nachweisen können, dass Sie über das Gebäude verfügen dürfen, genau wie bei einer Wohnungstür. Sagen Sie am Telefon bitte dazu, um welche Art von Tür und Schloss es geht, damit der Monteur das passende Material dabei hat.",
    },
    nachbarn: ["muessen", "leopoldshoehe", "oerlinghausen"],
  },
  {
    slug: "hardissen",
    name: "Hardissen",
    typ: "ortsteil",
    plz: "32791",
    intro:
      "Hardissen grenzt südwestlich direkt an die Lager Kernstadt. Näher kann ein Einsatzort kaum liegen, und trotzdem gilt derselbe Festpreis wie überall im Kreis Lippe.",
    lokal:
      "Hardissen ist deutlich dichter bebaut als die Ortsteile weiter außen, mit zusammenhängenden Wohnstraßen und auch einigen Mehrfamilienhäusern. Bei Mehrfamilienhäusern kommt eine Frage dazu, die im freistehenden Haus keine Rolle spielt: Wer darf die Tür eigentlich öffnen lassen? Wir öffnen die Wohnungstür für den Mieter, der dort wohnt, nicht für den Nachbarn und nicht für Besuch. Deshalb prüfen wir vor Ort kurz Ihren Ausweis oder eine andere Bestätigung. Das dauert eine halbe Minute und schützt am Ende Sie.",
    faq: {
      frage: "Was ist, wenn mein Ausweis in der Wohnung liegt?",
      antwort:
        "Das ist der Normalfall und kein Hindernis. Es geht auch anders: Post mit Ihrem Namen im Briefkasten, ein Nachbar, der Sie bestätigt, oder ein Blick in die Wohnung nach dem Öffnen, ob dort Ihre Unterlagen liegen. Wir finden gemeinsam einen Weg. Ohne jeden Nachweis öffnen wir allerdings nicht.",
    },
    nachbarn: ["waddenhausen", "hoerste", "ohrsen"],
  },
  {
    slug: "billinghausen",
    name: "Billinghausen",
    typ: "ortsteil",
    plz: "32791",
    intro:
      "Billinghausen liegt im Süden von Lage am Hang des Teutoburger Waldes. Wir sind hier Tag und Nacht im Einsatz, und die Anfahrt ist im Preis inbegriffen.",
    lokal:
      "Billinghausen ist ruhig und überwiegend von Wohnhäusern mit Garten geprägt, viele davon in leichter Hanglage. Hanglagen bringen eine Eigenheit mit: Häufig gibt es einen zweiten Zugang auf der Talseite, oft eine Kellertür oder eine Souterraintür. Wenn Sie sich ausgesperrt haben, lohnt sich vor dem Anruf ein kurzer Blick, ob dieser zweite Zugang offen ist. Falls nicht, kommen wir. Und falls diese Kellertür bei Ihnen seit Jahren nur mit einem einfachen Schloss gesichert ist, sprechen wir das bei der Gelegenheit an. Für Einbrecher sind abgelegene Nebeneingänge deutlich attraktiver als die Haustür zur Straße.",
    faq: {
      frage: "Lohnt sich eine bessere Sicherung der Kellertür wirklich?",
      antwort:
        "In Hanglagen wie hier oft mehr als jede Nachrüstung an der Haustür. Nebeneingänge liegen nicht einsehbar, sind meist schwächer gesichert und werden entsprechend häufiger angegangen. Wir schauen uns das kostenlos an, wenn wir ohnehin bei Ihnen sind.",
    },
    nachbarn: ["hoerste", "muessen", "oerlinghausen"],
  },
  {
    slug: "ehrentrup",
    name: "Ehrentrup",
    typ: "ortsteil",
    plz: "32791",
    intro:
      "Ehrentrup liegt im Nordosten von Lage Richtung Lemgo. Ein Anruf genügt, und Sie wissen vor der Anfahrt, was der Einsatz kostet.",
    lokal:
      "Ehrentrup ist ländlich, überschaubar und von Wohnhäusern sowie einzelnen landwirtschaftlichen Betrieben geprägt. Was hier auffällt: Viele Haushalte haben mehrere Außentüren mit jeweils eigenem Schlüssel, historisch gewachsen über Anbauten und Umbauten hinweg. Das Ergebnis ist ein Schlüsselbund, den niemand mehr vollständig zuordnen kann, und regelmäßig eine Tür, deren Schlüssel seit Jahren verschollen ist. Genau dafür gibt es Schließanlagen: ein Schlüssel für alle Türen, mit klar geregelten Berechtigungen. Das ist kein Luxus, sondern für Betriebe mit mehreren Gebäuden meist die praktischere Lösung.",
    faq: {
      frage: "Kann man mehrere Türen auf einen Schlüssel umstellen?",
      antwort:
        "Ja, das nennt sich Schließanlage und ist auch im kleinen Rahmen möglich, etwa für Haus, Garage und Werkstatt. Die vorhandenen Türen müssen dafür meist nicht getauscht werden, in der Regel reichen neue Zylinder. Wir schauen uns vor Ort an, was bei Ihnen geht, und rechnen es Ihnen vorher durch.",
    },
    nachbarn: ["kachtenhausen", "ohrsen", "lemgo"],
  },
  {
    slug: "ohrsen",
    name: "Ohrsen",
    typ: "ortsteil",
    plz: "32791",
    intro:
      "Ohrsen liegt östlich von Lage in Richtung Detmold. Auch hier gilt: ein Festpreis, keine Anfahrtskosten, keine Zuschläge nachts oder am Wochenende.",
    lokal:
      "Ohrsen ist einer der kleineren Ortsteile und liegt ruhig zwischen Lage und Detmold. Wer hier wohnt, pendelt häufig, und das schlägt sich in den Anrufen nieder: Ein großer Teil der Türöffnungen in Ohrsen passiert morgens zwischen sieben und neun, wenn jemand mit dem Kaffee in der Hand die Tür hinter sich zuzieht und der Schlüssel noch auf der Kommode liegt. Die gute Nachricht dabei ist, dass eine nur zugefallene Tür der unkomplizierteste Fall überhaupt ist. Sie ist nicht abgeschlossen, die Falle ist lediglich eingerastet, und in vielen Fällen bekommen wir sie schonend auf, ohne dass am Schloss etwas kaputtgeht.",
    faq: {
      frage: "Ich muss gleich zur Arbeit. Wie schnell sind Sie da?",
      antwort:
        "Wir nennen Ihnen am Telefon eine ehrliche Einschätzung, keine Wunschzahl. Aus Lage heraus sind die Wege nach Ohrsen kurz. Sagen Sie uns, wie dringend es ist, dann können wir die Reihenfolge danach ausrichten.",
    },
    nachbarn: ["hardissen", "ehrentrup", "detmold"],
  },

  // ─────────────────────────────────────────────────────────────
  // Nachbarstädte im Kreis Lippe
  // ─────────────────────────────────────────────────────────────
  {
    slug: "detmold",
    name: "Detmold",
    typ: "nachbarstadt",
    plz: "32756",
    intro:
      "Detmold ist die Kreisstadt von Lippe und liegt rund zehn Kilometer von unserem Betrieb in Lage entfernt. Wir öffnen hier Türen rund um die Uhr, zum selben Festpreis wie in Lage.",
    lokal:
      "Detmold hat eine ungewöhnlich große Bandbreite an Türen. In der Altstadt stehen Fachwerkhäuser mit teils denkmalgeschützten Türblättern, rundherum Gründerzeit- und Nachkriegsbestand, dazu durch die Hochschule ein großer Anteil an kleinen Mietwohnungen mit hoher Fluktuation. Denkmalgeschützte Türen sind für uns die anspruchsvollsten Fälle, weil hier nichts beschädigt werden darf, was später schwer oder gar nicht zu ersetzen ist. Wir arbeiten an solchen Türen betont vorsichtig und nehmen uns die Zeit dafür. Wenn eine Beschädigung im Einzelfall nicht zu vermeiden wäre, sagen wir Ihnen das vorher und nicht hinterher.",
    faq: {
      frage: "Meine Wohnungstür ist denkmalgeschützt. Können Sie die trotzdem öffnen?",
      antwort:
        "In aller Regel ja, und bei historischen Türen gehen wir besonders behutsam vor. Sagen Sie uns das bitte schon am Telefon, damit der Monteur das passende Werkzeug mitbringt. Falls sich im Einzelfall eine Beschädigung nicht vermeiden ließe, besprechen wir das vor Ort mit Ihnen, bevor wir anfangen.",
    },
    nachbarn: ["ohrsen", "horn-bad-meinberg", "lemgo"],
  },
  {
    slug: "lemgo",
    name: "Lemgo",
    typ: "nachbarstadt",
    plz: "32657",
    intro:
      "Die Alte Hansestadt Lemgo liegt gut neun Kilometer nordöstlich von Lage. Unser Schlüsselnotdienst ist hier Tag und Nacht unterwegs, ohne Aufschlag für Nacht oder Wochenende.",
    lokal:
      "Lemgos Altstadt mit ihrer Weserrenaissance-Bebauung gehört zu den besterhaltenen in Ostwestfalen, und das merkt man an den Haustüren. Schwere alte Türblätter, tiefe Laibungen und Schlösser, die älter sind als die meisten Bewohner, sind hier keine Seltenheit. Rund um den Campus der Technischen Hochschule sieht es dagegen völlig anders aus: viele kleine Mietwohnungen, häufige Mieterwechsel und entsprechend oft die Frage nach einem Zylindertausch beim Einzug. Beides bedienen wir. Für den Altbestand bringen wir Geduld mit, für den Zylindertausch in der Studentenwohnung einen Termin, der nicht länger als nötig dauert.",
    faq: {
      frage: "Ich ziehe in Lemgo in eine Mietwohnung. Darf ich den Zylinder selbst tauschen?",
      antwort:
        "Grundsätzlich dürfen Sie das, solange Sie den Originalzylinder aufbewahren und ihn beim Auszug wieder einsetzen. Sprechen Sie es trotzdem vorher mit dem Vermieter ab, das erspart beiden Seiten Ärger. Bei einer Schließanlage im Haus geht es allerdings nicht ohne Zustimmung, weil Ihr Zylinder Teil eines größeren Systems ist.",
    },
    nachbarn: ["ehrentrup", "detmold", "bad-salzuflen"],
  },
  {
    slug: "bad-salzuflen",
    name: "Bad Salzuflen",
    typ: "nachbarstadt",
    plz: "32105",
    intro:
      "Bad Salzuflen liegt rund elf Kilometer westlich von Lage. Wir kommen zum Festpreis, und der gilt auch, wenn Sie uns nachts um drei anrufen.",
    lokal:
      "Bad Salzuflen ist als Kurstadt anders strukturiert als der Rest des Kreises. Neben dem normalen Wohnbestand gibt es hier sehr viele Ferienwohnungen, Kurappartements und Pensionen, und das erzeugt eine eigene Sorte Anruf: Gäste, die mit dem Zimmerschlüssel nicht zurechtkommen, und Vermieter, die abends nicht vor Ort sind. In solchen Fällen ist die Berechtigungsfrage etwas kniffliger als bei einer Privatwohnung, weil der Gast nicht der Eigentümer ist. Wir lösen das in der Regel mit einem kurzen Telefonat zum Vermieter. Wenn Sie Ferienwohnungen in Bad Salzuflen vermieten, ist es sinnvoll, das vorher einmal mit uns zu klären, statt es im Ernstfall zu improvisieren.",
    faq: {
      frage: "Ich vermiete Ferienwohnungen. Können Sie für meine Gäste öffnen, wenn ich nicht da bin?",
      antwort:
        "Ja, wenn die Berechtigung geklärt ist. Am einfachsten ist es, wenn wir Sie im Einsatzfall kurz telefonisch erreichen und Sie die Öffnung freigeben. Melden Sie sich gern vorab bei uns, dann hinterlegen wir Ihre Objekte und den Ablauf, und im Ernstfall geht es ohne Rückfragen schneller.",
    },
    nachbarn: ["waddenhausen", "lemgo", "leopoldshoehe"],
  },
  {
    slug: "oerlinghausen",
    name: "Oerlinghausen",
    typ: "nachbarstadt",
    plz: "33813",
    intro:
      "Oerlinghausen liegt südwestlich von Lage oben auf dem Kamm des Teutoburger Waldes. Die Anfahrt den Berg hinauf kostet Sie nichts extra, der Festpreis bleibt derselbe.",
    lokal:
      "Oerlinghausen ist gebaut wie kaum ein anderer Ort im Kreis: fast alles am Hang, mit Häusern auf mehreren Ebenen, Eingängen auf halber Höhe und Zuwegungen über Treppen. Für einen Türöffnungseinsatz heißt das ganz praktisch, dass wir häufiger Material ein Stück weit tragen, statt direkt vor der Tür zu parken. Am Preis ändert das nichts. Was die Türen selbst angeht, finden wir hier viel Bestand aus den Sechzigern bis Achtzigern mit den originalen Zylindern. Wer in Oerlinghausen über Einbruchschutz nachdenkt, sollte die Terrassen- und Balkontüren auf der Talseite nicht vergessen, die liegen oft nicht einsehbar.",
    faq: {
      frage: "Unser Haus liegt am Hang, die Zufahrt ist eng. Ist das ein Problem?",
      antwort:
        "Nein, das kennen wir aus Oerlinghausen gut. Sagen Sie uns am Telefon, wo wir am besten halten können, dann sparen wir uns die Suche. Zuschläge für schwierige Zufahrten gibt es bei uns nicht.",
    },
    nachbarn: ["billinghausen", "pottenhausen", "augustdorf"],
  },
  {
    slug: "leopoldshoehe",
    name: "Leopoldshöhe",
    typ: "nachbarstadt",
    plz: "33818",
    intro:
      "Leopoldshöhe grenzt im Nordwesten direkt an das Lager Gebiet. Kurze Wege für uns, ein Festpreis für Sie, rund um die Uhr.",
    lokal:
      "Leopoldshöhe ist stark von Wohnbebauung geprägt, viele Einfamilienhäuser, viele Pendlerhaushalte. Das bedeutet in der Praxis: Tagsüber ist oft niemand zu Hause, und die typische Notlage entsteht abends bei der Rückkehr oder frühmorgens beim Aufbruch. Ein Punkt, den wir hier oft ansprechen: Wer tagsüber regelmäßig ein leeres Haus zurücklässt, sollte die Haustür wirklich abschließen und nicht nur zuziehen. Eine nur ins Schloss gezogene Tür ist mechanisch schnell offen, und die meisten Einbrüche in solchen Wohngebieten sind keine Hochtechnologie, sondern schlicht die Nutzung einer Gelegenheit.",
    faq: {
      frage: "Reicht es, die Haustür nur zuzuziehen, wenn ich kurz weg bin?",
      antwort:
        "Nein. Eine zugezogene Tür ist nur von der Falle gehalten und lässt sich mit wenig Aufwand öffnen. Erst durch zweimaliges Abschließen fahren die Riegel aus, und genau die machen den Unterschied. Es kostet drei Sekunden und ist die wirksamste kostenlose Einbruchschutzmaßnahme, die es gibt.",
    },
    nachbarn: ["kachtenhausen", "heiden", "pottenhausen"],
  },
  {
    slug: "augustdorf",
    name: "Augustdorf",
    typ: "nachbarstadt",
    plz: "32832",
    intro:
      "Augustdorf liegt südlich von Lage mitten in der Senne. Wir fahren auch dorthin zum Festpreis, ohne Aufschlag für die längere Strecke.",
    lokal:
      "Augustdorf ist durch den Bundeswehrstandort geprägt, und das wirkt sich unmittelbar auf unsere Einsätze aus. Es gibt viel Mietwohnraum, die Bevölkerung ist im Schnitt jünger, und es wird deutlich häufiger umgezogen als in den ruhigeren Nachbargemeinden. Bei jedem Wechsel stellt sich dieselbe Frage nach den Schlüsseln: Wie viele sind im Umlauf, und wer hat noch einen? Wenn beim Auszug ein Schlüssel fehlt, wird es für den Mieter im Zweifel teuer, denn dann steht schnell der Austausch der Schließanlage im Raum. Wer einen Schlüssel vermisst, sollte das früh melden und nicht hoffen, dass er wieder auftaucht.",
    faq: {
      frage: "Beim Auszug fehlt ein Wohnungsschlüssel. Muss ich die ganze Anlage bezahlen?",
      antwort:
        "Nicht automatisch. Der Vermieter kann die Kosten nur verlangen, wenn tatsächlich eine Missbrauchsgefahr besteht und er die Anlage auch wirklich austauschen lässt. Eine rein rechnerische Erstattung ohne tatsächlichen Austausch ist nicht zulässig. Prüfen Sie außerdem Ihre Haftpflichtversicherung, viele Tarife decken Schlüsselverlust ab.",
    },
    nachbarn: ["oerlinghausen", "schlangen", "horn-bad-meinberg"],
  },
  {
    slug: "horn-bad-meinberg",
    name: "Horn-Bad Meinberg",
    typ: "nachbarstadt",
    plz: "32805",
    intro:
      "Horn-Bad Meinberg liegt südöstlich von Lage am Rand des Teutoburger Waldes. Auch hier gilt unser Festpreis inklusive Anfahrt, zu jeder Tages- und Nachtzeit.",
    lokal:
      "Horn-Bad Meinberg besteht aus zwei sehr unterschiedlichen Hälften und einer Reihe kleiner Ortschaften drumherum. In Horn prägen der historische Kern und die Burg das Bild, in Bad Meinberg der Kurbetrieb mit Kurhäusern und Gästewohnungen. Dazu kommen die Dörfer im Umland, in denen die Wege lang und die Häuser weit auseinander liegen. Für uns heißt das: Die Einsätze hier unterscheiden sich stark, vom Altbauzylinder im Horner Zentrum bis zur abgelegenen Hofstelle Richtung Externsteine. Was gleich bleibt, ist der Preis. Wir rechnen nicht nach Entfernung ab, sondern nach Leistung.",
    faq: {
      frage: "Wir wohnen in einem der Ortsteile außerhalb. Wird es dadurch teurer?",
      antwort:
        "Nein. Unser Festpreis gilt im gesamten Einsatzgebiet, und Horn-Bad Meinberg gehört mit allen Ortsteilen dazu. Eine längere Anfahrt ist unser Aufwand, nicht Ihr Kostenrisiko. Was länger dauern kann, ist die Ankunft, und dazu sagen wir Ihnen am Telefon eine realistische Einschätzung.",
    },
    nachbarn: ["detmold", "schlangen", "augustdorf"],
  },
  {
    slug: "schlangen",
    name: "Schlangen",
    typ: "nachbarstadt",
    plz: "33189",
    intro:
      "Schlangen liegt am Südrand des Kreises Lippe Richtung Paderborn. Es ist die längste Anfahrt in unserem Gebiet, und der Preis ist trotzdem derselbe.",
    lokal:
      "Schlangen ist ländlich geprägt, mit Wohnbebauung im Ort und einzelnen Höfen und Siedlungen am Rand der Senne. Die Entfernung zu uns ist von allen Orten im Einsatzgebiet die größte, und wir sagen Ihnen am Telefon ehrlich, wie lange die Anfahrt dauert, statt eine Zahl zu nennen, die gut klingt. Falls es sich nicht um einen akuten Notfall handelt, sondern etwa um einen Zylindertausch oder eine Beratung zum Einbruchschutz, legen wir solche Termine in Schlangen gern auf den Tag, an dem wir ohnehin in der Ecke sind. Sprechen Sie uns einfach darauf an.",
    faq: {
      frage: "Lohnt sich der Anruf bei Ihnen trotz der Entfernung?",
      antwort:
        "Das entscheiden Sie, und wir geben Ihnen die Grundlage dafür: Am Telefon erfahren Sie den Preis und eine ehrliche Einschätzung der Anfahrtszeit. Wenn es ein akuter Notfall ist und Ihnen jemand Näheres schneller helfen kann, sagen wir Ihnen das auch. Was Sie bei uns nicht erleben, ist eine Rechnung, mit der Sie nicht gerechnet haben.",
    },
    nachbarn: ["augustdorf", "horn-bad-meinberg", "detmold"],
  },
];

export const ortBySlug = (slug: string) => orte.find((o) => o.slug === slug);
export const ortsteile = orte.filter((o) => o.typ === "ortsteil");
export const nachbarstaedte = orte.filter((o) => o.typ === "nachbarstadt");
