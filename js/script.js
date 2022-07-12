Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
      currentActiveIndex: 0,
      pictures: [
        {
            url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
            title: 'Svezia',
            description:
              'Il clima è continentale nordico e risente della presenza del mare solo nelle estreme regioni meridionali. Le estati sono brevi e temperate, gli inverni sono freddi e lunghi.',
          },
        
          {
            url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
            title: 'Perù',
            description:
              ' Il Perù è uno dei paesi più famosi e ambiti del Sud America, soprattutto grazie a Machu Picchu, il luogo che più lo rappresenta nell immaginario comune.',
          },
        
          {
            url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
            title: 'Chile',
            description:
              'il Paese sudamericano è custode di paesaggi e ambienti straordinariamente diversificati, che vanno dal più arido deserto del mondo alle dolci colline ricamate di vigneti, dai ghiacci perenni della Patagonia alle isole ricoperte di foreste.',
          },
          {
            url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
            title: 'Argentina',
            description:
              'in Argentina senza dubbio la natura occupa un posto rilevante: dalla cordigliera delle Ande ai laghi glaciali, passando per le distese di Pampa e le famose cascate di Iguazu, il Paese del tango è capace di offrire ai viaggiatori paesaggi straordinari.',
          },
          {
            url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
            title: 'Colombia',
            description:
              'La Colombia è una terra ricca di luoghi da sogno, spiagge da sogno e cittadine colorate tutte da visitare. La Colombia è una meta di viaggio straordinaria.',
          },
      ],

    }
});