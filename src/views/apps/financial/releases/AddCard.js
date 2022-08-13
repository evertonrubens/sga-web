// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'
import Repeater from '@components/repeater'

// ** Third Party Components
import axios from 'axios'
import Flatpickr from 'react-flatpickr'
import { SlideDown } from 'react-slidedown'
import { X, Plus, Hash } from 'react-feather'
import Select, { components } from 'react-select'
import { selectThemeColors } from '@utils'
import {
  Card,
  CardBody,
  CardText,
  Row,
  Col,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormGroup,
  Label,
  Button,
  UncontrolledTooltip
} from 'reactstrap'

// ** Styles
import 'react-slidedown/lib/slidedown.css'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/base/pages/app-invoice.scss'

const AddCard = () => {
  // ** States
  const [count, setCount] = useState(1)
  const [value, setValue] = useState({})
  const [open, setOpen] = useState(false)
  const [clients, setClients] = useState(null)
  const [selected, setSelected] = useState(null)
  const [picker, setPicker] = useState(new Date())
  const [invoiceNumber, setInvoiceNumber] = useState(false)
  const [dueDatepicker, setDueDatePicker] = useState(new Date())
  const [options, setOptions] = useState([
    {
      value: 'add-new',
      label: 'Adicionar novo',
      type: 'button',
      color: 'flat-success'
    }
  ])

  useEffect(() => {
    // ** Get Clients
    axios.get('/api/invoice/clients').then(response => {
      const arr = options
      response.data.map(item => arr.push({ value: item.name, label: item.name }))
      setOptions([...arr])
      setClients(response.data)
    })

    // ** Get Invoices & Set Invoice Number
    axios
      .get('/apps/invoice/invoices', {
        page: 1,
        perPage: 10,
        status: '',
        q: ''
      })
      .then(response => {
        const lastInvoiceNumber = Math.max.apply(
          Math,
          response.data.allData.map(i => i.id)
        )
        setInvoiceNumber(lastInvoiceNumber + 1)
      })
  }, [])

  // ** Deletes form
  const deleteForm = e => {
    e.preventDefault()
    e.target.closest('.repeater-wrapper').remove()
  }

  // ** Function to toggle sidebar
  const toggleSidebar = () => setOpen(!open)

  // ** Vars
  const countryOptions = [
    { value: 'australia', label: 'Australia' },
    { value: 'canada', label: 'Canada' },
    { value: 'russia', label: 'Russia' },
    { value: 'saudi-arabia', label: 'Saudi Arabia' },
    { value: 'singapore', label: 'Singapore' },
    { value: 'sweden', label: 'Sweden' },
    { value: 'switzerland', label: 'Switzerland' },
    { value: 'united-kingdom', label: 'United Kingdom' },
    { value: 'united-arab-emirates', label: 'United Arab Emirates' },
    { value: 'united-states-of-america-south-brazil', label: 'Brasil' },
    { value: 'united-states-of-america-south-argentina', label: 'Argentina' },
    { value: 'united-states-of-america-south-uruguay', label: 'Uruguay' }
  ]

  // ** Custom Options Component
  const OptionComponent = ({ data, ...props }) => {
    if (data.type === 'button') {
      return (
        <Button className='text-left rounded-0' color={data.color} block onClick={() => setOpen(true)}>
          <Plus size={14} /> <span className='align-middle ml-50'>{data.label}</span>
        </Button>
      )
    } else {
      return <components.Option {...props}> {data.label} </components.Option>
    }
  }

  // ** Invoice To OnChange
  const handleInvoiceToChange = data => {
    setValue(data)
    setSelected(clients.filter(i => i.name === data.value)[0])
  }

  const note =
    'Tipo de Lançamento: "Crédito" recebido pela venda Nr. 103234, forma de pagamento via financiamento, sendo: 30% a vista e diferença pela financiadora: RenCar!'

  return (
    <Fragment>
      <Card className='invoice-preview-card mb-0'>
        {/* Header */}
        <CardBody className='invoice-padding pb-0'>
          <div className='d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0'>
            <div>
              <div className='logo-wrapper'>
                <svg viewBox='0 0 82 21' version='1.1' height='24'>
                  <defs>
                    <linearGradient id='invoice-linearGradient-1' x1='100%' y1='10.5120544%' x2='50%' y2='89.4879456%'>
                      <stop stopColor='#000000' offset='0%'></stop>
                      <stop stopColor='#FFFFFF' offset='100%'></stop>
                    </linearGradient>
                    <linearGradient
                      id='invoice-linearGradient-2'
                      x1='64.0437835%'
                      y1='46.3276743%'
                      x2='37.373316%'
                      y2='100%'
                    >
                      <stop stopColor='#EEEEEE' stopOpacity='0' offset='0%'></stop>
                      <stop stopColor='#FFFFFF' offset='100%'></stop>
                    </linearGradient>
                  </defs>
                  <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                    <g transform='translate(-400.000000, -178.000000)'>
                      <g transform='translate(400.000000, 178.000000)'>
                        <image id="image0" width="82" height="21" x="0" y="0"
                            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAAAVCAYAAADVcblPAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
                        AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAA
                        CXBIWXMAAA7EAAAOxAGVKw4bAAAJ+ElEQVRYw+2YfVBU1xnGf3f3Lssiy4fy5VKRYFQ0EUolKPnA
                        D+JE0ZoxWhOrNolxdKq2f0gTo+PE/qH1M9GaRJMMo1FKVKjfCuqkQ6LVgsRPjHYREQFlIQIqyLLs
                        3n37h3ojojFq2qQzeWbOzL3nPOc99zxzznuec5EHgKZpUlJSImvXrpUpU6ZIUVGRiIisWLFCYmNj
                        pU+fPjJ37lwRESkrK5Nhw4ZJenq65ObmSn1Dg1ytqJDNQ9Iks9cvpSQ370GG/slD5QGgaRoLFy5k
                        z549qKpKWloaiYmJBAUF0dDQgKIoREREAHD48GHy8/PZv38/q1avZnteHmFFx7h2sACjj5nm6poH
                        GfonD8P9CJWVlcyfP5+CggJMJhOjRo2iQ4cOeDweamtrAYiMjNSF7t27NwCFhYWoqorJZCIldTB9
                        IiL497osjCYV3yd6Eztm1I899x8U37ki9+3bx4cffkhFZQUOh4OEhATS0tK4dOkSqqqSmpoKQL9+
                        /diwYQNVVVX07dsXj8fDiRMnaGpqwmw2M2XqVGq37KK1ohxNVYn9/RtcPHIUH6s/v0hM/LE1+O8L
                        abFYUBSFrlFdiYuLo7W1FbPZzNSpU3WOiGC1Whk0aJBe5/V6mTt3LpGRkbQi/MrWha9m/RkFIbh/
                        EmEJ8ewbPQ5FVXj2r8uJHjyI/3coIiK3V2iaxsmTJ+nWrRsBAQHY7XYURaFHjx4PHFy8Xq42N3Nm
                        +fuULF2B1+TDs+ve55viEsqWrkQ1Krj8LSSvXEaPX4/8QSZUfr4cZ4uTXr16/U+FbJcjCwsLycjI
                        IDc3F4CePXs+lIgAisGA95KD8xuzweWic+ogzEGdOL8+C9XXjOrXAfXadQqmz6R0V+4jT6a2tpZh
                        acMYOHAgBw8e/PGEPHv2LDk5OURHR9O/f/9HDu71apxaux7X+XLU4CC6T3yZ0u178FRVY1RVRASz
                        vxVTUwuHZ71D9cmT94jj/c5xNE0DoL6+nqqqKmpra2loaPje3+l0Omlubv5e3JaWlrty2+RIi8XC
                        gAEDSEpKwmazPbKQdfYSKrduw2hU8H8qgaghqbhaW6jK8kc8HpSbYpqsVlxV1Rx+ZwHDNq7Dx9cX
                        gOvXrzN79mxOnz7NypUrdUdwC1evXuXtt9+mtLSU5cuXExgYiI+PDwB5eXk4HA48Hg8igqqqDB8+
                        vM289u7dS1ZWFufPnwcgJiaGsWPHMnz48DbjuN1utm7dyo4dO6ioqMDr9WKz2UhNTWXs2LEEBwfD
                        LUPpdrt/cJOanz5L1lvDZV14lJRs367X/2vRElkTFCF/79JDsm8r64JscnLNep136tQpAQSQZcuW
                        tY+fny8mk0kAmT9/vjQ0NEinTp30PneWadOm6XOdNWuW+Pn5teP4+vrKm2++Ka2trSIiUldXJ6NH
                        j9bHubPEx8dLfn7+DUPudDrZv38/8fHxuqF+WIgIiqJQfeIkldt2YTBA8FNJPDb0BZ2T8IepVB84
                        hPNQET5Wf26ddz6qkTOr1hD9whCstgg0TcNiseB0Ou+6vTVNw9fXF7fbrccAUBSF6OhoOnbsqK9I
                        o9Gop6uVK1eyePFifRcmJSVhMBgoKCjA6XSydOlSggKDmD1nNqtXr2bz5s0YjUaSk5NJTExEURQK
                        CwspLCzkxIkTLF++/MbWvnDhAk1NTQQEBDy0gE0N9YimYQ0JRRBOZaxBvqnDbfbh8YmvoPqYda7Z
                        L4CEmX/kn0cn4211o5huZBiD2UzzuRJKt2wnYcZUFIMBRVF0ce6E4S7tmqYhIsybN4+RI0fqIquq
                        SqdOnXA4HKxZswaAsLAw3nvvPV566SUMBgM7d+5k+vTp1NbW8tHHHzF+wnjsdjsAISEh5OTk6JcP
                        p9PJ+vXryc7OZsKECagej4eKigr69OmDn5/fQ4l42V7CP6ZOx+t0kpbzN5ouN1Czey+4XYQMfJqo
                        oUMA+OaMnTPrN2DwutCczfj4WaC55duVZDBg8goVu3N58vXxGE2mb0VT2l/CFEXRBbzDxREcHHwj
                        d92BY8eOUVpaCsBrr73G+PHj9bYxY8Zw+vRp5s2bR2VlJXa7ncTERDIzM7l8+TLjxo0jMjISr9dL
                        WFgYA1IGsGrVKnr27ImqaRrR0dFERUU99Gq8Un6BpmPHMXvcnFj9Mdq1Vry1dUiAlZ5vTML35ko/
                        n7+f4kV/wc+ooqhGfPwDMfn5cyPd3ICPxZcrJ09Rf/oMxtBQXaA7hbpV53a77/pN96q/du0aLpcL
                        gO7du7drT0hI0J+rq6uZNGkSxcXF5OTkcODAgTbcDz74gJiYGDIzM1HNZvND+8RbsPV/ipBnn+H6
                        oUNc3LQFRQOjScX6TDLRQwbjFUEBeo96EX+/DmjNVzF18KX2+NdU5WzHhIDRCAKKyQeuXKGm4CuC
                        f3PjXu90Ovniyy9I/1N6m3GLiop0KxIWFtYmV5puW80NDQ188sknxMXFYbPZsFqtNDY2cuTIESZP
                        ntwm5ueff64/h4aG4u/vz6JFi3j11Vex2+04HA4URaGmpoYtW7ZQVlbGwoULweVyicvleuQT+vTG
                        jZIZ0lmybV1lky1GPg2PkrM3f5V57tGnuvhryer+pGzq3EWyox6/Ubr2kM+CwmXvb1+X5uvXZewr
                        LwsgBoNBZs6cKeXl5VJXVycZGRn6CR0aGipnzpyR+vp6CQ8PF0BmzJghLS0t4nK5ZM6cOQJIbGys
                        OBwOSUlJ0U/oBQsWSHV1tdTU1MiSJUvEYrEIIL179xaHwyEZGRkSExMj06ZNk4sXL+rf3tjYKKmp
                        qQJIYmKicOXKFWlsbHxkIVuczbJl2EjZGBIhnwVFyO5Xfiea2y1eEfHeo8/VyirJ7ttPNoZHSnZU
                        t5tCdpdNYV1k09ODRXO5pOjIkTaWpmPHjhIREdHGgry77F095owZMwQQRVEkOTlZUlJSxGAwCCBj
                        xowREZFt27aJ2WzW+4eGhkpoaKj+bjKZJCsrS0RE3nrrLb3earVKcnKypKamSkxMjCiKIoCkp6cL
                        LS0tumd6VJzaul0+9g+UdSGd5cKXX96Xf/VilayLfULWWALk06Bwvazr0Ek+6vyY1J49KyIiO3fu
                        lF69erXzcMHBwbJ48WLRNE2PWVNTIyNGjGjHHTBggJSXl+u8zMxMiYqKasez2WySkZHRJt7MmTPv
                        6k+NRqNMnDhRampqRNE0TW4//R4Fmubh3K5cjH4WYp5//r4xWxuvcW7HTrRmF4rh5iVLAcWr4cZD
                        zMgXsYaF6Yk/Ly+Po0eP4nK5iI2NZciQIcTFxbWL29zczO7du8nPz8fr9fLcc88xYsQIAgMDdZ8L
                        UHaujL379nL82HEEIT4+nqFDh9KtW7d2Me12OwcOHKC4uJjW1la6du1KSkoKSUlJqKra/u/Pz3g4
                        3PcP+c/4fvgPhQOw7tm/nE4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDMtMTVUMDM6MTU6NDEr
                        MDM6MDDWgO1kAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTAzLTE1VDAzOjE1OjQxKzAzOjAwp91V
                        2AAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII=" />
                      </g>
                    </g>
                  </g>
                </svg>
                <h3 className='text-primary invoice-logo'>Veículos Brasil</h3>
              </div>
              <p className='card-text mb-25'>Av. Brasil, 529 - Ibirapuera</p>
              <p className='card-text mb-25'>São Paulo - SP, CEP: 06520-030, Brasil</p>
              <p className='card-text mb-0'>+55 (011) 4452 0172, +55 (011) 97690 2198</p>
            </div>
            <div className='invoice-number-date mt-md-0 mt-2'>
              <div className='d-flex align-items-center justify-content-md-end mb-1'>
                <h4 className='invoice-title'>PG-ID:</h4>
                <InputGroup className='input-group-merge invoice-edit-input-group disabled'>
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                      <Hash size={15} />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type='number'
                    className='invoice-edit-input'
                    value={invoiceNumber || 4432}
                    placeholder='53634'
                    disabled
                  />
                </InputGroup>
              </div>
              <div className='d-flex align-items-center mb-1'>
                <span className='title'>Data:</span>
                <Flatpickr
                  value={picker}
                  onChange={date => setPicker(date)}
                  className='form-control invoice-edit-input date-picker'
                />
              </div>
              <div className='d-flex align-items-center'>
                <span className='title'>Data Vencto:</span>
                <Flatpickr
                  value={dueDatepicker}
                  onChange={date => setDueDatePicker(date)}
                  className='form-control invoice-edit-input due-date-picker'
                />
              </div>
            </div>
          </div>
        </CardBody>
        {/* /Header */}

        <hr className='invoice-spacing' />

        {/* Address and Contact */}
        <CardBody className='invoice-padding pt-0'>
          <Row className='row-bill-to invoice-spacing'>
            <Col className='col-bill-to pl-0' lg='8'>
              <h6 className='invoice-to-title'>Creditar para:</h6>
              <div className='invoice-customer'>
                {clients !== null ? (
                  <Fragment>
                    <Select
                      className='react-select'
                      classNamePrefix='select'
                      id='label'
                      value={value}
                      options={options}
                      theme={selectThemeColors}
                      components={{
                        Option: OptionComponent
                      }}
                      onChange={handleInvoiceToChange}
                    />
                    {selected !== null ? (
                      <div className='customer-details mt-1'>
                        <p className='mb-25'>{selected.name}</p>
                        <p className='mb-25'>{selected.company}</p>
                        <p className='mb-25'>{selected.address}</p>
                        <p className='mb-25'>{selected.country}</p>
                        <p className='mb-0'>{selected.contact}</p>
                        <p className='mb-0'>{selected.companyEmail}</p>
                      </div>
                    ) : null}
                  </Fragment>
                ) : null}
              </div>
            </Col>
            <Col className='pr-0 mt-xl-0 mt-2' lg='4'>
              <h6 className='mb-2'>Detalhes do Pagamento:</h6>
              <table>
                <tbody>
                  <tr>
                    <td className='pr-1'>Total Devido:</td>
                    <td>
                      <span className='font-weight-bolder'>R$ 95.060,00</span>
                    </td>
                  </tr>
                  <tr>
                    <td className='pr-1'>Nome do Banco:</td>
                    <td>Itaú</td>
                  </tr>
                  <tr>
                    <td className='pr-1'>País:</td>
                    <td>Brasil</td>
                  </tr>
                  <tr>
                    <td className='pr-1'>IBAN:</td>
                    <td>ETD95476213874685</td>
                  </tr>
                  <tr>
                    <td className='pr-1'>SWIFT code:</td>
                    <td>BR91905</td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
        </CardBody>
        {/* /Address and Contact */}

        {/* Product Details */}
        <CardBody className='invoice-padding invoice-product-details'>
          <Repeater count={count}>
            {i => {
              const Tag = i === 0 ? 'div' : SlideDown
              return (
                <Tag key={i} className='repeater-wrapper'>
                  <Row>
                    <Col className='d-flex product-details-border position-relative pr-0' sm='12'>
                      <Row className='w-100 pr-lg-0 pr-1 py-2'>
                        <Col className='mb-lg-0 mb-2 mt-lg-0 mt-2' lg='3' sm='12'>
                          <CardText className='col-title mb-md-50 mb-0'>Conta Contabil</CardText>
                          <Input type='select' className='item-details'>
                            <option>Compras de Autos</option>
                            <option>Mecânica</option>
                            <option>Alugueis</option>
                            <option>Telecomunicação</option>
                            <option>Outros</option>
                          </Input>
                        </Col>
                        <Col className='mb-lg-0 mb-2 mt-lg-0 mt-2' lg='3' sm='12'>
                          <CardText className='col-title mb-md-50 mb-0'>SubConta</CardText>
                          <Input type='select' className='item-details'>
                            <option>Auto de Luxo PF</option>
                            <option>Auto de Luxo PJ</option>
                            <option>Auto popular PF</option>
                            <option>Auto popular PJ</option>
                          </Input>
                          <Input className='mt-2' type='textarea' rows='1' defaultValue='Compra de veículos de PF' />
                        </Col>
                        <Col className='my-lg-0 my-2' lg='2' sm='12'>
                          <CardText className='col-title mb-md-2 mb-0'>Custo</CardText>
                          <Input type='number' defaultValue='97.000,00' placeholder='97.000,00' />
                          <div className='mt-2'>
                            <span>Desconto:</span> <span>2%</span>
                            <span id={`tax1-${i}`} className='ml-50'>
                              3%
                            </span>
                            <span id={`tax2-${i}`} className='ml-50'>
                              12%
                            </span>
                            <UncontrolledTooltip target={`tax1-${i}`}>Imposto Fed.</UncontrolledTooltip>
                            <UncontrolledTooltip target={`tax2-${i}`}>Imposto Estadual</UncontrolledTooltip>
                          </div>
                        </Col>
                        <Col className='my-lg-0 my-2' lg='2' sm='12'>
                          <CardText className='col-title mb-md-2 mb-0'>Qtd</CardText>
                          <Input type='number' defaultValue='1' placeholder='1' />
                        </Col>
                        <Col className='my-lg-0 mt-2' lg='2' sm='12'>
                          <CardText className='col-title mb-md-50 mb-0'>Preço</CardText>
                          <CardText className='mb-0'>R$ 97.000,00</CardText>
                        </Col>
                      </Row>
                      <div className='d-flex flex-column align-items-center justify-content-start border-left invoice-product-actions py-50 px-25'>
                        <X size={18} className='cursor-pointer' onClick={deleteForm} />
                      </div>
                    </Col>
                  </Row>
                </Tag>
              )
            }}
          </Repeater>
          <Row className='mt-1'>
            <Col sm='12' className='px-0'>
              <Button.Ripple color='primary' size='sm' className='btn-add-new' onClick={() => setCount(count + 1)}>
                <Plus size={14} className='mr-25'></Plus>
                <span className='align-middle'>Add Item</span>
              </Button.Ripple>
            </Col>
          </Row>
        </CardBody>

        {/* /Product Details */}

        {/* Invoice Total */}
        <CardBody className='invoice-padding'>
          <Row className='invoice-sales-total-wrapper'>
            <Col className='mt-md-0 mt-3' md={{ size: '6', order: 1 }} xs={{ size: 12, order: 2 }}>
              <div className='d-flex align-items-center mb-1'>
                <Label for='salesperson' className='form-label'>
                  Comprador:
                </Label>
                <Input type='text' className='ml-50' id='salesperson' placeholder='Everton Martins' />
              </div>
            </Col>
            <Col className='d-flex justify-content-end' md={{ size: '6', order: 2 }} xs={{ size: 12, order: 1 }}>
              <div className='invoice-total-wrapper'>
                <div className='invoice-total-item'>
                  <p className='invoice-total-title'>Subtotal:</p>
                  <p className='invoice-total-amount'>R$ 97.000,00</p>
                </div>
                <div className='invoice-total-item'>
                  <p className='invoice-total-title'>Desconto:</p>
                  <p className='invoice-total-amount'>R$ 1.940,00</p>
                </div>
                <div className='invoice-total-item'>
                  <p className='invoice-total-title'>Impostos:</p>
                  <p className='invoice-total-amount'>15%</p>
                </div>
                <hr className='my-50' />
                <div className='invoice-total-item'>
                  <p className='invoice-total-title'>Total:</p>
                  <p className='invoice-total-amount'>R$ 109.610,00</p>
                </div>
              </div>
            </Col>
          </Row>
        </CardBody>
        {/* /Invoice Total */}

        <hr className='invoice-spacing mt-0' />

        {/* Invoice Note */}
        <CardBody className='invoice-padding py-0'>
          <Row>
            <Col>
              <FormGroup className='mb-2'>
                <Label for='note' className='form-label font-weight-bold'>
                  Note:
                </Label>
                <Input type='textarea' rows='2' id='note' defaultValue={note} />
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
        {/* /Invoice Note */}
      </Card>

      <Sidebar
        size='lg'
        open={open}
        title='Add Payment'
        headerClassName='mb-1'
        contentClassName='p-0'
        toggleSidebar={toggleSidebar}
      >
        <Form>
          <FormGroup>
            <Label for='customer-name' className='form-label'>
              Customer Name
            </Label>
            <Input id='customer-name' placeholder='Everton Martins' />
          </FormGroup>
          <FormGroup>
            <Label for='customer-email' className='form-label'>
              Customer Email
            </Label>
            <Input type='email' id='customer-email' placeholder='example@domain.com' />
          </FormGroup>
          <FormGroup>
            <Label for='customer-address' className='form-label'>
              Customer Address
            </Label>
            <Input type='textarea' cols='2' rows='2' id='customer-address' placeholder='1307 Lady Bug Drive New York' />
          </FormGroup>
          <FormGroup>
            <Label for='country' className='form-label'>
              Country
            </Label>
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              options={countryOptions}
              isClearable={false}
            />
          </FormGroup>
          <FormGroup>
            <Label for='customer-contact' className='form-label'>
              Contact
            </Label>
            <Input type='number' id='customer-contact' placeholder='763-242-9206' />
          </FormGroup>
          <FormGroup className='d-flex flex-wrap mt-2'>
            <Button className='mr-1' color='primary' onClick={() => setOpen(false)}>
              Add
            </Button>
            <Button color='secondary' onClick={() => setOpen(false)} outline>
              Cancel
            </Button>
          </FormGroup>
        </Form>
      </Sidebar>
    </Fragment>
  )
}

export default AddCard
