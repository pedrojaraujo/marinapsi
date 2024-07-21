import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <section className="
        bg-pred 
        2xl:h-[150px] 
        xl:h-[120px] 
        lg:h-[120px] 
        sm:h-[180px] 
        lsm:h-[180px] 
        flex
        2xl:flex-row
        xl:flex-row
        lg:flex-row
        sm:flex-col
        lsm:flex-col
        lsm:text-center
        w-full 
        justify-center 
        items-center 
        2xl:gap-[100px]
        xl:gap-[100px]
        lg:gap-[100px]
        sm:gap-[40px]
        lsm:gap-[40px]
    
        ">
            <div>
                <p className='2xl:text-[20px] xl:text-[20px] lg:text-[18px] sm:text-[16px] sm:text-center text-pcream'>Copyright&copy; Marina Araujo | Site idealizado e desenvolvido por Pedro Joaquim Araujo <GitHubIcon style={{ fontSize: '15px' }} />  </p>
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