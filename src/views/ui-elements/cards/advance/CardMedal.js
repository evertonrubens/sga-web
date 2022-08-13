import { Card, CardBody, CardText, Button } from 'reactstrap'
import medal from '@src/assets/images/illustration/badge.svg'

const CardMedal = () => {
  return (
    <Card className='card-congratulations-medal'>
      <CardBody>
        <h5>Parabéns 🎉 Everton!</h5>
        <CardText className='font-small-3'>Você Ganhou medalha de ouro</CardText>
        <h3 className='mb-75 mt-2 pt-50'>
          <a href='/' onClick={e => e.preventDefault()}>
            130.9k de vendas nos últimos 3 dias
          </a>
        </h3>
        <Button.Ripple color='primary'>Visualizar Vendas</Button.Ripple>
        <img className='congratulation-medal' src={medal} alt='Medal Pic' />
      </CardBody>
    </Card>
  )
}

export default CardMedal
