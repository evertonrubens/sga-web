// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

// ** Third Party Components
import { Card, CardBody, Button, Input, CustomInput, Label } from 'reactstrap'

const AddActions = () => {
  return (
    <Fragment>
      <Card className='invoice-action-wrapper'>
        <CardBody>
          <Button.Ripple color='primary' block className='mb-75' disabled>
          Ir para o Contabil
          </Button.Ripple>
          <Button.Ripple tag={Link} to='/apps/financial/accounts-payable/preview' color='primary' block outline className='mb-75'>
            Visualizar em PDF
          </Button.Ripple>
          <Button.Ripple color='primary' block outline>
            Editar
          </Button.Ripple>
          <Button.Ripple color='primary' block outline>
            Salvar
          </Button.Ripple>
        </CardBody>
      </Card>
      <div className='mt-2'>
        <div className='invoice-payment-option'>
          <p className='mb-50'>Forma de Pagamento</p>
          <Input type='select' id='payment-select'>
            <option>Cartão de Débito</option>
            <option>Cartão de Crédito</option>
            <option>Paypal</option>
            <option>Pix</option>
            <option>Transferência Bancária</option>
            <option>Boleto</option>
          </Input>
        </div>
        <div className='invoice-terms mt-1'>
          <div className='d-flex justify-content-between'>
            <Label className='mb-0' for='payment-terms'>
              Termos de Pagamento
            </Label>
            <CustomInput type='switch' id='payment-terms' defaultChecked />
          </div>
          <div className='d-flex justify-content-between py-1'>
            <Label className='mb-0' for='client-notes'>
              Notificar o Credor
            </Label>
            <CustomInput type='switch' id='client-notes' defaultChecked />
          </div>
          <div className='d-flex justify-content-between'>
            <Label className='mb-0' for='payment-stub'>
              Comprovante de Pagamento
            </Label>
            <CustomInput type='switch' id='payment-stub' />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default AddActions
