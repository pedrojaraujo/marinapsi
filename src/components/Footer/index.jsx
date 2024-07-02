import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
    return (
        <section className="bg-pred h-[235px] flex w-full justify-center items-center gap-[200px]">
            <div>
                <p className='text-[24px] text-pcream'>Copyright&copy; Marina Araujo | Site idealizado e desenvolvido por Pedro Araujo </p>
            </div>
            <div className='flex gap-5'>
                <a href="https://www.facebook.com/profile.php?id=1395171534" className='text-pcream'> <FacebookIcon  style={{ fontSize: '65px' }}/> </a>
                <a href="https://www.instagram.com/marinaaraujo.psi/?igsh=MW9ka2Jnd2VyeXVzZQ%3D%3D" className='text-pcream'> <InstagramIcon  style={{ fontSize: '65px' }} /> </a>
                <a href="https://www.instagram.com/marinaaraujo.psi/?igsh=MW9ka2Jnd2VyeXVzZQ%3D%3D" className='text-pcream'> <WhatsAppIcon  style={{ fontSize: '65px' }} /> </a>
            </div>
        </section>
    );
}

export default Footer;