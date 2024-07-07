import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <section className="
        bg-pred 
        2xl:h-[235px] 
        xl:h-[235px] 
        lg:h-[200px] 
        sm:h-[180px] 
        flex
        2xl:flex-row
        xl:flex-row
        lg:flex-row
        sm:flex-col
        w-full 
        justify-center 
        items-center 
        2xl:gap-[100px]
        xl:gap-[100px]
        lg:gap-[100px]
        sm:gap-[40px]
    
        ">
            <div>
                <p className='2xl:text-[24px] xl:text-[24px] lg:text-[20px] sm:text-[18px] sm:text-center text-pcream'>Copyright&copy; Marina Araujo | Site idealizado e desenvolvido por Pedro Joaquim Araujo <GitHubIcon style={{ fontSize: '18px' }} />  </p>
            </div>
            <div className='flex gap-5'>
                <a className="text-pcream" target="_blank" href="https://www.facebook.com/profile.php?id=1395171534" > <FacebookIcon className='iconFooter'  /> </a>
                <a className="text-pcream" target="_blank" href="https://www.instagram.com/marinaaraujo.psi/?igsh=MW9ka2Jnd2VyeXVzZQ%3D%3D" > <InstagramIcon className='iconFooter'  /> </a>
                <a className="text-pcream" target="_blank" href="https://wa.me/5511987046526" > <WhatsAppIcon className='iconFooter'  /> </a>
            </div>
        </section>
    );
}

export default Footer;