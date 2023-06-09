import styles from '../../styles/home.module.scss'
import Image from 'next/image'
import logoImg from '../../public/logo.svg'
import Head from 'next/head'

import {Input} from '../components/ui/Input'
import {Button} from '../components/ui/Button'

export default function Home(){
    return(
        <>
        <Head>
            <title>Sujeito - Faça seu login</title>
        </Head>
        <div className={styles.container}>
            <Image src={logoImg} alt="Logo Sujeito Pizzaria"/>

            <div className={styles.login}>
                <form>
                    <Input 
                        placeholder='Digite seu email'
                        type='text'
                        />

                    <Input 
                        placeholder='Digite sua senha'
                        type='password'
                        />

                    <Button
                        type="submit"
                        loading={false}
                    >
                        Cadastrar
                    </Button>
                </form>
                <a className={styles.text}>Não possui uma conta? Cadastre-se</a>
            </div>
        </div>
        </>
    )
}