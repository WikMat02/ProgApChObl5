Wieloetapowe budowanie obrazów
Wymagania odnośnie zawartości DockerLab5

Etap pierwszy w pliku DockerLab5: 
- ma wykorzystywać obraz bazowy „scratch”.
- ma budować prostą aplikację webową, która wyświetla następujące informacje:

• Adres IP serwera, na którym aplikacja jest uruchomiona,   
• Nazwę serwera (hostname)  
• Wersję aplikacji (w dowolnym schemacie) 

- wersja aplikacji ma być określona w poleceniu docker build …. poprzez nadanie wartości zmiennej VERSION definiowanej przez instrukcje ARG.

Etap drugi w pliku DockerLab5:   
- ma wykorzystywać obraz bazowy Nginx (w dowolnej wersji)
- aplikacja z etapu pierwszego ma zostać skopiowana na serwer HTTP i ustawiona, by być domyślnie uruchamiana i wyświetlana  jako strona domyślna (startowa)
- ma być uwzględnione sprawdzanie poprawności działania (HEALTHCHECK)

W sprawozdaniu znajduję się:
- Treść utworzonego pliku DockerLab5  
- Użyte polecenie do budowy obrazu i wynik jego działania
- Polecenie uruchamiające serwer
- Polecenie potwierdzające działanie kontenera i poprawne funkcjonowanie opracowanej aplikacji.
- Zrzut ekranu (przeglądarka), potwierdzające że aplikacja realizuje 
wymaganą funkcjonalność.
