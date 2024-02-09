# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

/*Naša aplikacija napravljena je korišćenjem frontend i backend tehnologija Laravela i ReactJs-a u svrhu beleženja prisustva zaposlenih na različitim dogadjajima. Sistem poseduje 4 modela: usera, dogadjaj, prisustvo i ocenu. User je korisnik koji ima mogućnost logovanja i registracije. Ukoliko je korisnik ulogovan(unese email i sifru u skladu sa bazom na stranici Login) on može da dodaje nove dogadjaje, menja postojeće ili ih briše, ali takodje i da se izloguje iz sistema. Takodje, korisnici mogu biti i admini koji imaju posebne privilegije: na sajtu postoji stranica koja se zove Admin na kojoj oni mogu da pretražuju dogadjaje i da na taj način imaju uvid u to koji su korisnici prisustvovali tom dogadjaju i sa kojom ocenom. Na dnu ove stranice je korišćena i paginacija prisustva pomoću koje smo mi odredili da želimo da izlistamo po 5 dogadjaja po strani sa podacima o id-u, nazivu dogadjaja, imenu korisnika i oceni koju je korisnik dobio za dati dogadjaj. Postoji mogućnost odabira strane na koju admin želi da se prebaci, kao i odlazak na prethodnu ili sledeću stranu. Takodje, na ovoj stranici postoji i pita(pie) koja nam prikazuje procenat prisustva po svakoj oceni. Klikom na Logout stanicu, korisnik je automatski izlogovan i vraćen na Početnu stranicu. Ova stranica sadrži 3 kartice koje govore o načinu na koji može da se koristi sajt, a na dnu se nalaze komentari zadovoljnih korisnika koji su preuzeti sa javnog API-ja. Korisnik koji prvi put koristi sajt može se registrovati na stranici za Registraciju i za to mu je potrebno da unese ime,email i sifru. Dodale smo i mogućnost ostavljanja poruke ili pitanja adminu od strane korisnika na stranici Kontakt. Stranica O nama sadrži podatke o adminima: njihovu sliku, ime i prezime i kratak opis o svakom od njih. Kako bismo omogućile filtritanje, napravile smo stranicu Profesori u kojoj se pretraživanje vrši izborom katedre. Ukoliko izaberemo sve katedre, izlistaće se svi profesori. Ono što je spečifično za našu aplikaciju je postojanje kalendara na stranici Dogadjaji. Klikom na odredjeni dogadjaj, korisniku iskaču informacije o samom dogadjaju, a klikom na dugme ‘OK’ ulogovani korisnik može da vidi koji zaposleni su bili pozvani da dogadjaj(njihova imena i prezimena) i da li su oni prisustvovali, bili odustvni ili su zakasnili da njega. Takodje, omogućili smo izvoz podata iz kalendara u obliku .ics fajla gde možemo da vidimo za konkretni dogadjaj vreme pocetka i kraja, ko je od zaposlenih prisutan, kao i nacin na koji se dogadjaj održava (npr. Online).*/
