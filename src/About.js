import React,{useEffect,useRef,useState} from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Card from './Card'

function About() {
    const [isDown,setDown] = useState(true)
    const card1 = useRef(null)
    const card2 = useRef(null)
    const card3 = useRef(null)
    const card4 = useRef(null)
    const card5 = useRef(null)
    useEffect(()=>{
        const width = window.innerWidth
        if (width < 500) return 
       const event = window.addEventListener('scroll',()=>{
           const height = window.scrollY
           if (height < 400) {
            setDown(true)
            card1.current.classList.remove('show-card')
            card2.current.classList.remove('show-card')
            card3.current.classList.remove('show-card')
            card4.current.classList.remove('show-card')
            card5.current.classList.remove('show-card')
       } 
           if (height > 300) {
                card1.current.classList.add('show-card')
                
            }
            if (height > 600) {
                card2.current.classList.add('show-card')
            }
            if (height > 1000) {
                card3.current.classList.add('show-card')
            }

            if (height > 1500) {
                card4.current.classList.add('show-card')
            }
            if (height > 2200) {
                card5.current.classList.add('show-card')
                setDown(false)
            }
       })
        return () => window.removeEventListener('scoll',event) 
    },[])
    return (
        <div>
            <Navbar/>
            <Hero title='các dịnh vụ'/>
            {isDown && <div className='down-btn'><i class="fas fa-chevron-down"></i></div>}
            <Card cardRef={card1} position='left' info='khám và chữa bệnh' image='https://careplusvn.com/Uploads/t/qu/quy-trinh-kham-benh-va-nhung-dieu-can-luu-y-1_0003335_710.jpeg' alt='Khám bệnh'></Card>
            <Card cardRef={card2} position='right' info='siêu âm' image='https://vinmec-prod.s3.amazonaws.com/images/20200522_172047_209990_sieu_am_thai.max-800x800.jpg' alt='siêu âm'></Card>
            <Card cardRef={card3} position='left' info='xét nghiệm máu' image='https://i-suckhoe.vnecdn.net/2020/04/02/blood-tests-1585823057-9965-1585823613.jpg' alt='siêu âm'></Card>
            <Card cardRef={card4} position='right' info='điện tim' image='https://vinmec-prod.s3.amazonaws.com/images/20190926_173340_775438_dien_tam_do_3.max-1800x1800.jpg' alt='siêu âm'></Card>
            <Card cardRef={card5} position='left' info='thuốc tây các loại' image='https://images.unsplash.com/photo-1630094539386-280edfb5d46a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt='siêu âm'></Card>
        </div>
    )
}

export default About
