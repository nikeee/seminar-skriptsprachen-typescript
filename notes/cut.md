Aufgrund des simplen Anwendungsfalls für Webseiten JavaScript unterstützte in der ursprünglichen Version keine Threads.
JavaScript-Code läuft somit üblicherweise im selben Thread wie das Zeichnen der Webseite.
Wird der Hauptthread blockiert, führt dies dazu, dass die Webseite nicht mehr auf Nutzereingaben antwortet und sich nicht neu zeichnet.
Diese Gegebenheit hat dazu geführt, dass in JavaScript nicht vorgesehen ist, den Haupt-Thread blockieren zu können[^Es existieren Außnahmen wie bspw. die `alert()`-Funktion].
Programmierschnittstellen, welche asynchrone Operationen ausführen, verwenden deshalb event- bzw. callbackbasierte Designmuster.

Da eine langsame Ausführung von JavaScript zwangsläufig dazu führt, dass die Webseite langsamer antwortet, ist der zentrale Punkt bei JavaScript-Engines die Ausführungsgeschwindigkeit.

JavaScript-Code wird bei einer Webseite über das HTML-`<script>`-Tag eingebunden. Stößt der Browser beim Parsen der HTML-Seite auf ein solches Script-Tag, wird das Parsing so lange angehalten, bis der JavaScript-Code ausgeführt ist.

// Beispiel ist der Vergleich der zahl `0` mit der leeren Zeichenkette `""` (`0 == ""`) nicht nur gültig, sondern liefert auch noch `true` zurück.

// Die \js-Implementierungen gehen mittlerweile weit über das einfache Interpretieren hinaus.
// Zum Standardvorgehen gehört mittlerweile auch die Just-In-Time-Compilation (JIT), um die Codeausführung zu beschleunigen.

Es gibt jedoch Fälle, in denen eine solche Zeile vom Entwickler gewünscht ist.
Soll eine Variable auch den Wert `null` annehmen können, muss dies über die schreibweise `string | null` passieren.
Das vorherige Beispiel müsste dementsprechend in `let name: string | null = null;` abgeändert werden.
Nun weiß der Compiler, dass die Varialbe `name` auch `null` sein kann.
Versucht der Entwickler nun später im Code auf die `length`-Eigenschaft über `name.length` des Strings zuzugreifen, meldet der Compiler einen Fehler.
Es muss erst gesichert sein, dass die Variable nicht null ist.
Dies kann über einen ganz normalen Vergleich mit `if(name != null) { ... }` erfolgen.
Der Compiler überprüft alle möglichen Code-Pfade, die innerhalb einer Funktion möglich sind.
So kann er erkennen, wenn eine `null`-Prüfung fehlt.
Ging dem Ausdruck `name.length` eine `null`-Prüfung voran, besitzt die Variable `name` anschließend nur noch den Typ `string` und kann normal verwendet werden.


Die Deklarationen können auch von \js-IDEs aufgegriffen werden.
So können IDEs nicht nur eine bessere \js- und \ts-Autovervollständigung bieten, sondern bspw. auch die Parameterzahl überprüfen oder die Dokumentationen zu Methoden anzeigen.

Die Deklarationsdateien müssen dem \ts-Compiler auf einem Weg bereitgestellt werden.
Eine Möglichkeit ist, die Deklarationsdateien einer Bibliothek zusammen mit dem \js-Code auszuliefern.
Dies ist die einfachste Variante, denn der \ts-Compiler kann auf diese Art eingebundene Deklarationsdateien automatisch aufgreifen.
Eine andere Möglichkeit ist die Verwendung von Deklarationen, die die \ts-Community erstellt hat.
Diese können der \ts-Anwendung als zusätzliche Abhängigkeit hinzugefügt werden.
Gepflegt werden diese Community-Deklarationsdateien an einer zentralen Stelle in einem Open-Source-Repository \cite{dt}.
Zum aktuellen Zeitpunkt befinden sich dort Deklarationen für über 5.100 \js-Bi\-b\-li\-o\-thek\-en.

Es wird keine zusätzliche Typüberprüfung zur Laufzeit getätigt, da das resultierende \js{} identisch mit dem \ts{} ist, wenn die statische Typisierung entfernt wird.
Aus diesem Grund muss \ts-Code nicht an jeder Stelle mit Typ-Annotationen versehen werden.
\ts{} hat die Möglichkeit Interfaces zu definieren.
Dies ermöglicht es, Interfaces als \enquote{offen} anzusehen.


% Soll die Variable `name` auch den Wert `undefined` annehmen können, kann dies über eine weitere \enquote{veroderung} ergänzt werden.

% Gibt eine Funktion einen Wert vom Typ `number | null` zurück, muss wieder eine `null`-Prüfung des Ergebnisses stattfinden.
% Der Compiler kann so garantieren, dass im resultierenden \js-Code keine Laufzeitfehler aufgrund von Verweisen auf `null` oder `undefined` vorkommen können.

% TODO: Discriminated Unions?
% TODO: Source Maps, Debugging
% TODO: Type Guards?
% TODO: Der compiler hat verschiedene Flags

Node.js stellt dabei APIs bereit, um einen Webserver oder eine Konsolenanwendung zu erstellen oder sogar C-Funktionen aufzurufen.
Der eventbasierte Ansatz von \js{} wird dort verwendet, um Client-Anfragen mit nur einem Thread zu beantworten. % TODO: Vielleicht weg nehmen
Dies stellt sich als effizient heraus, da die meiste Zeit bei der Verarbeitung einer Anfrage üblicherweise dafür verwendet wird, auf Ein- und Ausgabe der Netzwerkschnittstelle zu warten.

Beispielsweise können Interfaces nicht nur erweitert bzw. verschmolzen werden, sondern sogar umgewandelt werden (\enquote{Mapped Types}). % TODO Erklären oder weg lassen

Das bestehende \js{}-Ökosystem kann mitsamt der bereits existierenden Bibliotheken weiterverwendet werden.
Dies wird über Deklarationsdateien ermöglicht, die vom Konzept her an Header-Dateien aus der C-Programmierung erinnern.

Variablen können auf zwei verschiedene Arten deklariert werden: \tsvar{} und \tslet{}.
Der Unterschied liegt im Sichtbarkeitsbereich der Variable, die deklariert wird.
Während \tslet{} die Variable nur im aktuellen Scope sichtbar deklariert, ist eine mit \tsvar{} deklarierte Variable immer im Bereich der gesamten Funktion sichtbar.
Konstanten lassen sich ebenfalls über \tsconst{} deklarieren und verhalten sich ansonsten wie \tslet{}.

Aufgefallen wäre dieser Fehler in einem großen Projekt vermutlich erst zur Laufzeit.


Da die statische Typisierung optional ist, hat \ts{} ein graduelles Typsystem.
Fehlen Typ-Annotationen, wird mit Typinferenz gearbeitet, wenn möglich.
Für typische Refactoring-Operationen wie das Umbenennen von Eigenschaften und Variablen kann der Compiler garantieren, dass dadurch keine neuen Fehler eingeführt werden.
Der Typchecker berücksichtigt den Kontrollfluss des Programms.
Bestärkt wird dieses Feature auch durch die Kontrollflussbasierte Typanalyse, die Verzweigungen im Quelltext bei der Bestimmung eines Typs berücksichtigt.
Der Type-Checker achtet nur auf die Struktur von Objekten.
Somit müssen Interfaces nicht explizit implementiert werden.
So können Interfaces um beliebige Methoden und Eigenschaften erweitert werden.

Für die Entwicklung dieser Sprache wurde Brendan Eich -- späterer Mitgründer der Mozilla Foundation -- eingestellt.
