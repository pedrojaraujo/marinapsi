import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Paragraph from '../Paragraph';
import { Title } from '../Titles';




const FAQ = () => {
    return (
        <section className="flex flex-col items-center 
        3xl:py-20
        2xl:py-20
        xl:py-15
        lg:py-10
        md:py-10
        sm:py-8 
        lsm:py-5 
        bg-pred 
        w-full 
        h-auto 
        ">
            <Title className='text-pcream'>
                Perguntas frequentes
            </Title>
            <section className='
            w-full 
            flex 
            flex-col 
            items-center 
            gap-3
            3xl:mt-[120px] 
            2xl:mt-[60px] 
            xl:mt-[50px] 
            lg:mt-[50px] 
            sm:mt-[15px] 
            lsm:mt-[15px] 
            '>
                <Accordion defaultExpanded className='w-10/12 font-trebuchet text-pred bg-plightyellow '>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon className='text-pred' />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Paragraph>Posso usar o convênio ou plano de saúde?
                        </Paragraph>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Paragraph>
                            Atualmente, não atendo diretamente pelo plano de saúde, mas ofereço recibos detalhados que podem ser utilizados para solicitar reembolso junto ao seu plano.
                        </Paragraph>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='w-10/12 font-trebuchet text-pred bg-plightyellow '>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon className='text-pred' />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Paragraph>Como posso solicitar um recibo para reembolso?</Paragraph>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Paragraph>
                            Para solicitar um recibo para reembolso, basta informar durante a consulta que você precisa do recibo. Vou fornecer um recibo detalhado com todas as informações necessárias para que você possa enviar ao seu plano de saúde. Recomendo que entre em contato com o seu plano de saúde para saber quais são as especificações e os requisitos para fazer a solicitação de reembolso, pois esses detalhes podem variar de acordo com cada plano. Caso tenha alguma dúvida ou precise de mais informações sobre o processo de reembolso, estou à disposição para ajudar.
                        </Paragraph>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='w-10/12 font-trebuchet text-pred bg-plightyellow '>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon className='text-pred' />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Paragraph>Como eu posso pagar?</Paragraph>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Paragraph>
                            O pagamento pode ser feito por transferência ou PIX no final de cada mês. Caso você more no exterior e não tenha mais uma conta no Brasil podemos combinar o pagamento através de outras plataformas.
                        </Paragraph>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='w-10/12 font-trebuchet text-pred bg-plightyellow '>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon className='text-pred' />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Paragraph>Qual a duração de cada sessão?</Paragraph>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Paragraph>
                            Cada sessão tem a duração de 40 a 50 minutos em média.
                        </Paragraph>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='w-10/12 font-trebuchet text-pred bg-plightyellow '>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon className='text-pred' />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Paragraph>Qual a frequência das sessões?</Paragraph>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Paragraph>
                            As sessões são realizadas toda semanalmente.  No entanto, dependendo do processo de cada paciente, é possível que se faça mais de uma vez na semana. Todo esse combinado, porém, é discutido em conjunto nas consultas para que seja viável para você e para mim.
                        </Paragraph>
                    </AccordionDetails>
                </Accordion>

            </section>

        </section >
    );
}

export default FAQ;