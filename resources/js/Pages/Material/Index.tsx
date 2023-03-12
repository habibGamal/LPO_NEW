import { faCirclePlay } from '@fortawesome/free-solid-svg-icons/faCirclePlay'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Book, BookDB } from "../../Models/Book";
import { motion } from "framer-motion"
import React from "react";
import useTranslate from "../../Hooks/useTranslate";
import { Inertia } from '@inertiajs/inertia';
import VideosScreen from '../../Components/VideosScreen';
enum Screen {
    Books,
    Videos,
}
export default function Index({ booksDB }: { booksDB: BookDB[] }) {
    const [screen, setScreen] = useState(Screen.Books);
    const books = booksDB.map(book => new Book(book));
    const [currentBook, setCurrentBook] = useState<Book>();
    const toVideos = (book: Book) => {
        if (book.videos.length > 0) {
            setCurrentBook(book)
            setScreen(Screen.Videos);
        } else {
            window.open(book.pdf, '_blank');
        }
    }
    const toBooks = () => {
        setScreen(Screen.Books)
    }
    const t = useTranslate();
    return (
        <>
            <section className="bg-ov-white">
                <div className="container lg:py-16 py-4 grid grid-rows-auto gap-4 text-center lg:text-align-inherit lg:grid-cols-2 items-center justify-between">
                    <div>
                        <motion.h3 initial={{ x: -300, opacity: 0 }} transition={{ duration: 1, type: 'spring' }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="text-3xl md:text-4xl lg:text-5xl mb-4 lg:mb-8  font-bold uppercase">{t('مواد', 'Study')} <br /> <span className="highlight-header"> {t('الدراسة', 'material')}</span></motion.h3>
                        <motion.p initial={{ x: -300, opacity: 0 }} transition={{ duration: 1, delay: .5, type: 'spring' }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="text-xl font-[500]">
                            {
                                t('تكنيك البيانو. (Piano Technique). هو عباره عن تمارين رياضيه لالصابع يؤديها الدارس علي البيانو كل يوم بعقل واعي. وتركيز تام ألكتسابالمرونه والمهارات والعادات العضويه والذهنيه الصحيحة التي تخزن في اللاشعور نتيجة للتمرين اليومي ومن أهم كتب تكنيك البيانو جون طومسون، لونجو، بارتوك.'
                                    ,
                                    'piano technique. (Piano Technique). It is a finger exercise that the student performs on the piano every day with a conscious mind. And complete focus to acquire flexibility, skills, and correct organic and mental habits that are stored in the subconscious as a result of daily exercise.Among the most important books on piano technique John Thompson, Longo, Bartok.'
                                )
                            }
                        </motion.p>
                    </div>
                    <div className="h-[400px]">
                        <motion.img initial={{ x: 300, opacity: 0, scale: 1 }} transition={{ duration: 1, type: 'spring' }} whileHover={{ scale: 1.05 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="h-full w-full object-contain mx-auto" src="./images/material.png" alt="" />
                    </div>
                </div>
            </section>
            <div className="move-sections-container ltr">
                <section className={`container moving-section screen-1 ${screen === Screen.Books ? 'current' : ''}`}>
                    <div className="box-out">
                        <div key="piano_info" style={{ backgroundImage: `url("images/piano_info.jpg")` }} onClick={() => Inertia.get('articles')} className="book books-1"></div>
                        {
                            books.map(book => <div key={book.id} onClick={() => toVideos(book)} style={{ backgroundImage: `url("${book.cover}")` }} className="book books-1"></div>)
                        }
                    </div>
                </section>
                <section className={`container my-8 moving-section screen-2 ${screen === Screen.Videos ? 'current' : ''}`}>
                    {currentBook ? <VideosScreen videos={currentBook.videos} /> : ''}
                    <a className="btn block my-4 mx-auto w-fit hover:text-white" href={currentBook?.pdf} target="_blank">Download PDF</a>
                    <button onClick={toBooks} className="btn block my-4 mx-auto">Back to books</button>
                </section>
            </div>
            <section className="m-10"></section>
        </>
    )
}

