import styles from './page.module.css';
import Image from 'next/image';

const Page = () => {
    return (
        <div>
            <div className={styles.header}>
                Welcome to my about page, my name is John!
            </div>
            <div className={styles.imageContainer}>
                <Image src="https://9otnordlgmffpjra.public.blob.vercel-storage.com/johnbagwell-Js1NO6X69rnfk8WqUYNkasWnbtwGaj.jpg" width={200} height={200} className={styles.profileImage} alt='Crying Jordan'/>
            </div>
            <div className={styles.body}>
                I am a software engineer with a passion for building applications that are both functional and beautiful.
                My other passions include food, music, and spending time with my family.
                My role in this project is co-backend lead, where I am responsible for the backend architecture and implementation.   
            </div>
        </div>
    );
}

export default Page;