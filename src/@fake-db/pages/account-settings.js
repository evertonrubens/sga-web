import mock from '../mock'
const data = {
  accountSetting: {
    general: {
      avatar: require('@src/assets/images/portrait/small/avatar-s-11.jpg').default,
      username: 'Everton',
      fullName: 'Everton Martins',
      email: 'everton.martins@ga.com.br',
      company: 'ga - Gestão de lojas de Autos'
    },
    info: {
      bio: '190 de Altura, olhos verdes e cabelos curtos. Ama a natureza, curte fazer novas amizades e está sempre disposto a ajudar o proximo.',
      dob: null,
      country: 'BR',
      website: '',
      phone: '+55 11 976909313'
    },
    social: {
      socialLinks: {
        twitter: 'https://www.twitter.com',
        facebook: 'evertonrubens@facebook.com',
        google: 'engeverton@gmail.com',
        linkedIn: 'https://www.linkedin.com/evertonrubens',
        instagram: '',
        quora: ''
      },
      connections: {
        twitter: {
          profileImg: require('@src/assets/images/avatars/11-small.png').default,
          id: 'evertonrubens'
        },
        google: {
          profileImg: require('@src/assets/images/avatars/3-small.png').default,
          id: 'luraweber'
        },
        facebook: {},
        github: {}
      }
    },
    notification: {
      commentOnArticle: true,
      answerOnForm: true,
      followMe: true,
      newAnnouncements: true,
      productUpdates: true,
      blogDigest: true
    }
  }
}

mock.onGet('/account-setting/data').reply(() => [200, data.accountSetting])
