import mock from '../mock'

const data = {
  pricing: {
    basicPlan: {
      title: 'Basic',
      img: require('@src/assets/images/illustration/Pot1.svg').default,
      subtitle: 'A simple start for everyone',
      monthlyPrice: 89.00,
      yearlyPlan: {
        perMonth: 79.00,
        totalAnnual: 948.00
      },
      planBenefits: [
        '100 responses a month',
        'Unlimited forms and surveys',
        'Unlimited fields',
        'Basic form creation tools',
        'Up to 2 subdomains'
      ],
      popular: false
    },
    standardPlan: {
      title: 'Platínium',
      img: require('@src/assets/images/illustration/Pot2.svg').default,
      subtitle: 'For small to medium businesses',
      monthlyPrice: 99.00,
      yearlyPlan: {
        perMonth: 85.00,
        totalAnnual: 1020.00
      },
      planBenefits: [
        'Unlimited responses',
        'Unlimited forms and surveys',
        'Instagram profile page',
        'Google Docs integration',
        'Custom “Thank you” page'
      ],
      popular: true
    },
    enterprisePlan: {
      title: 'Gold',
      img: require('@src/assets/images/illustration/Pot3.svg').default,
      subtitle: 'Solution for big organizations',
      monthlyPrice: 150.00,
      yearlyPlan: {
        perMonth: 130.00,
        totalAnnual: 1560.00
      },
      planBenefits: [
        'PayPal payments',
        'Logic Jumps',
        'File upload with 5GB storage',
        'Custom domain support',
        'Stripe integration'
      ],
      popular: false
    },
    qandA: [
      {
        question: 'Does my subscription automatically renew?',
        ans:
          'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.'
      },
      {
        question: 'Can I store the item on an intranet so everyone has access?',
        ans:
          'Tiramisu marshmallow dessert halvah bonbon cake gingerbread. Jelly beans chocolate pie powder. Dessert pudding chocolate cake bonbon bear claw cotton candy cheesecake. Biscuit fruitcake macaroon carrot cake. Chocolate cake bear claw muffin chupa chups pudding.'
      },
      {
        question: 'Am I allowed to modify the item that I purchased?',
        ans:
          'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan. Carrot cake marshmallow pastry. Bonbon biscuit pastry topping toffee dessert gummies. Topping apple pie pie croissant cotton candy dessert tiramisu.'
      }
    ]
  }
}

mock.onGet('/pricing/data').reply(() => [200, data.pricing])
