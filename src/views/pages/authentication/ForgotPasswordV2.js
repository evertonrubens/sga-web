import { Link } from 'react-router-dom'
import { useSkin } from '@hooks/useSkin'
import { ChevronLeft } from 'react-feather'
import { Row, Col, CardTitle, CardText, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import '@styles/base/pages/page-auth.scss'

const ForgotPasswordV2 = () => {
  const [skin, setSkin] = useSkin()

  const illustration = skin === 'dark' ? 'forgot-password-v2-dark.svg' : 'forgot-password-v2.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default

  return (
    <div className='auth-wrapper auth-v2'>
      <Row className='auth-inner m-0'>
        <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
          <svg viewBox='0 0 139 95' version='1.1' height='28'>
            <defs>
              <linearGradient x1='100%' y1='10.5120544%' x2='50%' y2='89.4879456%' id='linearGradient-1'>
                <stop stopColor='#000000' offset='0%'></stop>
                <stop stopColor='#FFFFFF' offset='100%'></stop>
              </linearGradient>
              <linearGradient x1='64.0437835%' y1='46.3276743%' x2='37.373316%' y2='100%' id='linearGradient-2'>
                <stop stopColor='#EEEEEE' stopOpacity='0' offset='0%'></stop>
                <stop stopColor='#FFFFFF' offset='100%'></stop>
              </linearGradient>
            </defs>
            <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
              <g id='Artboard' transform='translate(-400.000000, -178.000000)'>
                <g id='Group' transform='translate(400.000000, 178.000000)'>
                 <image id="image0" width="119" height="74" x="0" y="0" href="data:image/png;base64,
                      iVBORw0KGgoAAAANSUhEUgAAAHcAAABKCAIAAAAOv1yuAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
                      AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAS
                      OklEQVR42u2deXQcxZ3Hf9Xd09M9l6SRNDo8sjWyLAnZknyAhbHxhbHNIWNAD8yyeMNLFgIJLwls
                      Ng/C4SXLmoUQLziQZbPLMw8T2DDYgGyuOIBtfF8ysmxJlnVZY2lGo9Hc0z191P4xxpKluTVCY7Lf
                      v3q6q6qrPqr+ddWvftVCGGNIC2EANNl1mCgRk12BvwmlD+XvbUcGAGqyKxBbgoxPOPytnqBHlBQI
                      ZdDkslx1LquY7HoloHSnfHLQ/3iTbdeAb4aS0lKElka7hvglerZGz75YnUeT6fMsRlNaU361xf7K
                      uaH2gKBCqCpLWaWmrDIcdQmHhrjdjoCbl34/r0CtICe7mrGVvpQPDvje6HG2BYRShpqtVeTSJCbJ
                      IgpWGliDgnj7gm/LeZdBST4/uwClvUlP0yeOk+T/6Rg67uJVgJfplV0Bce9AoNMnnPQEvRL+aWnm
                      jXolYHih3XHI7pvsysZWmlLu9PBv9LgAIRah5XlspmK4njk06RSkbr8ECAChXzT2T3ZlYytNLcYB
                      u1/GAAg4hOxB+I+a3A8sPmdQ4jBs7XG/1ePGFAEIAYAjKAclOc1fg2lKeVCQgUAA4JPx692uPCX6
                      oUmnowiPKC/NZbZafB/0XzQUbR7eGZQM7P9TTkIYAGNACDA+5eIf+8a+Jl9Tm83kMYRJTb0yK9vL
                      CbscfOgvoSDS/fU3gZRlLIcOCJRwRzOpFSHHho4kni3PcAh4l83PYywD7LD63782/95pul2DNgBU
                      plWqFWndkSG1lL1BZ5enqXlob6fnqI1rBQCLr2WKuoIAKl91VYGqojJzUVnmNSqFDsWaT8/RsxSB
                      RAA1RdxSpN1j9ZMIZAw8gI0Xt3W781UKAACMC1QUTaQ7ZTRunxwe4qxnXUf29L89wHX0eJsoxJCI
                      Dps0KHsB4OqctVfn3lqZtSibNUbCLWH8xMn+F846tAj9fEZms4vv8QjVWQyPYc+A79EZWX+2+A64
                      +TK14i/XT52qUU42xomkbPG2HR7Y3tD1SlD2kohG8VkGGYsyFgHgtuLHrs5dY9LNDpus08vfe9By
                      wMkZFMSCDGW5RmFgKFnG++z+AQHvd/GA4PW5+Q9Mz55shrFFbtiwIYlsQYkzd/z77r639va9AwgI
                      RKERM7AcJn/TgqYsZeHxwZ23Tv3lL2e/6w46u72NoasIEQSiCES1Og/2+potvraKzIUkMdp2ZdHU
                      0lzVpxe8PZzY5RewBEoS2YLSh7ZABy+WZSh/VZb9SFlOur/4ACA5uzwYsPx36yNNji8opCRQGDcC
                      j0UlpcpnS4Kyy8CYaJLV0XpR5iiCGZmMQGSHu7HD3Xjc/tHPZ71n1JaNKme6VnliVcmmM4NfDvi+
                      dgSCMnYIEoHxGoPmX6pyZ+tVo9J7vcKxg3KcrZDkoEonFpsYQy5DTPAoJWHKTfav/tTxeJ+vg0Ip
                      s4Z2rv+/Wh5YM/Wfr867aZSjWUWRv64y/EyQerxBAWMAZGDIfJYe67uwDXBnTqIGM5fInQmAYF09
                      kWngaqozUsl1zG0S0GHrR9u6/rXP1xFPYgwgYhAxDwCiHIyeuNvT/HLzvbstb4e9qlGQlVlsjV5V
                      o2cLVGEQ2+1JIL6oBjPntDFf7HKlhmg4JWCXTwx8vrPndx3ub1AEJ5iMpSzWwFCqFQU/Ls+q1TMF
                      Bqrs+in1FKHIUOTLGFyCTavQ+EXv2LwIIQTIxncIklSaMS+hNgQ4sfEwTg5xSG2nxYpKpt/mMRrZ
                      iaAc7xij19Oy+fT9Vn/4XoyxTCC5UFX167kNKoX24knAJ61f1BiWjRx7OPmBjcfX2PluUQ6icDY9
                      h8m/q2Tj/Lyb42wAxrDnr3yizQ77J6mrZ6rnQVZW6seFcVH2Cs6njy50cPawfAHhInXlqoKfZSuN
                      GlbT6jz0+YVXX6w9dmpwz9PHlzxc8eaKovW7zm8Jyv5S3VyjprLP1dXuOfJZ32Yb1xXWuJfoqv6x
                      4vUC9fSUt/bbOmMAkGXM85LVxne2yx+bL0K4uR4tX6FL+R1jv/1kLL/b/owtYAlLBCFihq52XfGz
                      7e7G7ecftAU6ASCDKQAABEAhCOVyCVZz5wYSaDWln6auXmV8+P7SV984+8gAd27UwAMA2l2NO8+/
                      cn/Zb0liQhb3QhaPJJFKRZiKFcXTgFQ4G95BAECC0moL5BlSbDdiv/0a7Z/u7dsaaUQxM+u6x+du
                      L8wofb/nSTvXSxEMRTBhh3ck0BTBBCRPi2dPt6e5WFN1/4xNYWeJCIjdF95sGTo4EYjD3A7B9ddn
                      1NUzANBg5s40B8dd5GjFoMxLgX397+EI82A9k/OD8s0EIo8N7OQkLizckZKxpFHoHprx1irjAwqC
                      Nqoqa7JWifJoE4kQIpFye9dGCYsTB/cyCgQqKRdDoJHEeDxCisuPfrnb03TIti0SPh1dkMsaAcAd
                      tMVzMxEH1k/fPCdnBYkoAFAg2sBMi5S4xblvr+Xd1LY2ioqK1KGDBjN35EDCr9PoikF5b9+7BApv
                      u0WZm6O/LXQcpyuEJjQl2jmXfmKQBRxx+GXSzTGwU1Pb2uiaNReHujNJKPr7/SksORplv+Bu9xyI
                      RFmC4DTNrNBxJm2I52acNOQIXBjx03fGdTisaS7SVN5leqYye3GKQUZVtp6RgAeABjPXeiqVAQjR
                      KB+0ftjt+SZq9oudeH7e7fMNt8hYin4zhsx6p+up895md3DQGujYfOahXv/xsZ68iszr7ih+vCpn
                      2QTRjKLyyuEu1dLiTlWx0SifdHxGE5pIV0mgW5xfh44VBP2jitduN/0TAiTKXBTcZz17Np2+56Xm
                      e55vuv2c94ux5RdpKlcZH5qTu3KCeYbXlELVzfUEADSYuQs9lCyHt4WBgNjXl4BJiUhZxvJ534ko
                      OSmCOTn0Cf62OzOUeq3pVxtr9/9D2e+UpBoAMMDYStKExisOWvwn/aIjHOKr7jI9PVmIQyq7ighZ
                      54+3Ce3nwjgDjp9wHt4ntTWT3T3eOMuMSNnN2y2+luiZO9yHzw4du/QTAcpXldxY9MOXao8AQKG6
                      7M7iZ2QQAUCQht/aBKIoghlrKIyaynUlz06KobisGlPUknxxJNfbOdo6797FeQbZBjPXYObOtcRb
                      ZkRvUYeraXf/GwpCFSWzglD1B85ck7tWQVz2BgtNrlhKU5W91KSrBoAS3dxSXa0MnIrSOngrxvIo
                      l1OJbs7Nxp/MMayeXMQh5eYhrY5sOy1WzKQlCOizlDDsMBn2/FXMVBaXxOU6jphIwkESMTHztzqP
                      mTv+7a6SJ5VUtL+HSqGdZ1g9z7A6IHpbhvYfsL633/bepflkkabyxik/qs2/fbLxXpRGo8CECwAa
                      zFxdPVNiAoRg/76hBvNlz58kBwHici1F7Ms9njPH7R/HzI8QOuc+4hedeWypls6KmV5B0AXq6TOz
                      lgIQPsnuFYbKMmrvND0xzxCvE+67UV4+pdGSbafFttOiKiPA8YJ7kG07PTwXratnymZinZaOp7Qo
                      fTne+Q+BqC8sb551H6rWr1xtfFinjL3cqVLo7i59KtDi5SX3mmmPzcpeMslQx4hlKUxeDF/68E8E
                      AAYYnkDV1TMU459SGLtXhRSRsprKCkh2lsyJpxSEiF5vW4/nzEHbu0XqOdX6VTcY74uZa335xiO2
                      a9MQcUi6zPDn6+oZoyk4fXq8iCEaZUXC62AEIh2c3cH9pcN74gbjfc2De3ac33Tb1Mcr9PM9QQdF
                      0CyluTw9UZuXLrZ4rAK+0du26uqZPCNfXk6jBNc8I1LWKwviyc/LbhJoAJAgqCRG+7+P2T+ozVlX
                      oZ//ac9/nvMcnKW/cW726kLNjLBFyTIWBHnSQ74xhkBAbG72i5xqpJUAAFbnr6hIoAtfUkTKWmX2
                      FHVF2PWRS+KkoblZ9csK1ytJttmx98PeZxkyfCUIgmxyfHl6aP8px5fzc9cuN64fXRQnHvpaGs/a
                      XapFjEIMAAG3at/XQwsXJQw6ImUSkfls5WDgq0gRQ7zsXpCz/sGK34d+lulqFYjd1vt0pEk5AoJA
                      pIxFlgofR5FOiMOrwczV1at27+LnzEc6XVyji5CiDaoXGO4+MbhDicKvg7Fk5uopD448U529eMcF
                      TZQCizSVNxX9dNQEOqk4iknTt/Vk8orcFeXxrhBG8xbNzlk+VVMV6Wo2PT1TmT/yjCs4MHbh45Ly
                      VcVjfRTjiaOYRDWYOet55eHDzjjTR6OspfUl2mvECAPnoOznpeGdM7zk39bzQqRoTwxwf9nmUT6K
                      ACc2N155iENqMHMBN9vaFpd3NMZaySrjA5GCX238mf7AWQCQsXzB1/pc062d3v2RjPiivLtmXu6S
                      D3Di4fR63SWsBjN3oUsRyTs6UjEoF6rLFxesxzhMiB8J9Ce9r3kFZ0D0/G/X0/3+trADDAkLAJCv
                      No08abdzVzrikHZuC/b1B2Imi0GZJpkFhjvDzrYpgjnrPfBRz0sSFsozlhIIh4LAR8qkvaY8c/6o
                      k7YB7so1FGPV1xc7siB2PMas7MU1OTeEvUQh5V+tr5m7nrs257aflG8tYKsCkn2kHb+v9IVR8bJe
                      r3Alvu6iyOeJnSauCC6f4NrYeOt5T0tYsytifoZmQX3xU7nMtDbX4a9tb9O08tGqtwWJV5CXzUQ9
                      HuH4oStgXJyQbr6DXL5SEz1NvNGIXe6mLW2/6HCfCLukLcocieiqjBVX6RcWqiprDEvGhnBYbVzL
                      N1dYLxawP7PAcd116srKLLWatvb7duy0WtuNI9Pceody6coYjvgE9pWcGtzz545nuj2nIg0kRJlD
                      CM033PGDspdG+ZqttkDLN0RMxLqpfaxqAh0ZiABLBya52C4aEQdLqgZvWJ5dYtKMXNbxeqUtb/X0
                      txZeOlNXzyxZEcN5lEAs/qzsxX7pUXPnBpu/N3xZBFOkuWpJ/t+Pdedn6GhJ5urqmSigMcg1VXRu
                      buwFmuQpA3w6aPfFepx0xt571uUXFkwlx2w81mjIhQsy3m8ddtc1mLnFNyijO7kS3iN13Pb59u7f
                      9ISz0RWZ10Vf5G9tc/f3KNPZaATBvXYdmlOTzbIRsbncgeee8tNo2Ba/+IeM6JQT3lcy17CyUF26
                      4/zLX1m2jNx9Fk8cRXmZzlQsUQwWOTbdWMtYKijrv/OOgsKCGGG1FEVgFO8eoYtZkqhQvrpk/Yzn
                      y3TXfmZ53eI9A9/GUcSzyE/T5MJFmf3WgCQrSIKMzlqhv6BkxrXpUxKRx5pDoRj+M0Jnqa/Pml1d
                      ktxdgkFJqYwW8TWuXZV+wbP17JNNzl0/Lv/DzMRj2r7c5SQgWqe+5R63qVibdPUAwOsT/viaSyHm
                      RklTUnPh9rXGzEwKxbeC4PPzG55wK2HYIVe3Di9Zmhkly/h3CIOEJTJW5HIk7ds3tP2tydxFPW9Z
                      /y2rp9GJLDC1d3j++LKsGBFGUVfPTK8QjUZ1pCwpaGHSiAGgtjajrn7SdlEbSi3xIMYYS5LMB0Wf
                      nz99xvnRRzbF5ZEqDWausyPaPDvFX24YHOROneKUSlCrkUZLsgzBspRKRVEUEfZxpChCghQHvsev
                      qir1SMQYY1HCLpcQ5EWPV7LZAvbBoGtIcHtkpxP5PbQUVFJYRSLj2KLEYDRrk9IvN3iFUydQg/nS
                      /SQACUAAgFB8nySLBCUoGVmXQbAqkmVIi4UnQTV2he270SfbUGtrO6MkvD7ZbsUCTwY5tRIyACgA
                      alTcUOhUcp9wTBnl6D6KEecRQMjCyABy2EXM70w0yug9PRwQgeKMx0pcqaE8ykchYVFEfoQJBVKh
                      dP3MV5wSMCdDEAFJI3XShaSA8ijEVJbl7+7OnjZVJ4lyZxd3otF99pghzk9npJVEun/ZjXTpdE1e
                      nm7IIZxucezdqU+uqPFS9niEUZ42lRqmTtGoVSQA1FSz1VWZW8me1iP5yd9jkvTgQ3qT6eJoXaNW
                      cjzem2xR46Ls9Yaxxe7eKS/+tmvl6oz8PAYArDau6SiVQOxC2sj8vnX1TbJOS3p98tFjg2ePxhVs
                      FVbJz0qurDiKidYt9XjZisxIV5M0l1doHMVkKRnKGMP3aXn0O1BylMf1yY+/QU3UtxHr6pnM3ICC
                      nuw42VTI7cLmLeNqSDKUEULR15YAgGL9NTXJhPqmp3gvH6O9dLRBRJJjjKPHnL4hNtJ3aQBg0TKa
                      JL8PHTmkE40ut52J0t75C0mWjdhlkx/JBYOS3x/m+xUURWg0V9I/YBhnewkidizz/wGcQLvzoN9h
                      mgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wMy0xMVQwNjo0MToxOCswMzowMLpaVX8AAAAldEVY
                      dGRhdGU6bW9kaWZ5ADIwMjItMDMtMTFUMDY6NDE6MTgrMDM6MDDLB+3DAAAAGXRFWHRTb2Z0d2Fy
                      ZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAABJRU5ErkJggg==" />
                </g>
              </g>
            </g>
          </svg>
          <h2 className='brand-text text-primary ml-1'>Gestor de Autos</h2>
        </Link>
        <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
          <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
            <img className='img-fluid' src={source} alt='Login V2' />
          </div>
        </Col>
        <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
            <CardTitle tag='h2' className='font-weight-bold mb-1'>
              Esqueceu a Senha? 🔒
            </CardTitle>
            <CardText className='mb-2'>
              Digite o seu e-mail de inscrição na plataforma e enviaremos instruções para redefinir sua senha
            </CardText>
            <Form className='auth-forgot-password-form mt-2' onSubmit={e => e.preventDefault()}>
              <FormGroup>
                <Label className='form-label' for='login-email'>
                  Email
                </Label>
                <Input type='email' id='login-email' placeholder='rubens@gmail.com' autoFocus />
              </FormGroup>
              <Button.Ripple color='primary' block>
                Enviar link de redefinição
              </Button.Ripple>
            </Form>
            <p className='text-center mt-2'>
              <Link to='/pages/login-v2'>
                <ChevronLeft className='mr-25' size={14} />
                <span className='align-middle'>Voltar para o login</span>
              </Link>
            </p>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default ForgotPasswordV2
