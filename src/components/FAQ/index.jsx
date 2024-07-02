import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const FAQ = () => {
    return (
        <section className="bg-pred w-full h-auto pb-28">
            <h2 className="font-cormorant text-[48px] text-center h-12 pt-20 text-pcream">Perguntas frequentes</h2>
            <section className='mt-[120px] w-full flex flex-col items-center gap-3'>
                <Accordion defaultExpanded className='w-10/12 font-trebuchet text-pred bg-plightyellow '>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon className='text-pred' />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography className='font-[24px]'>Pergunta a ser pensada?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='font-[24px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion  className='w-10/12 font-trebuchet text-pred bg-plightyellow '>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon className='text-pred' />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography className='font-[24px]'>Pergunta a ser pensada?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='font-[24px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion  className='w-10/12 font-trebuchet text-pred bg-plightyellow '>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon className='text-pred' />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography className='font-[24px]'>Pergunta a ser pensada?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='font-[24px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion  className='w-10/12 font-trebuchet text-pred bg-plightyellow '>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon className='text-pred' />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography className='font-[24px]'>Pergunta a ser pensada?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='font-[24px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion  className='w-10/12 font-trebuchet text-pred bg-plightyellow '>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon className='text-pred' />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography className='font-[24px]'>Pergunta a ser pensada?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='font-[24px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </section>

        </section >
    );
}

export default FAQ;