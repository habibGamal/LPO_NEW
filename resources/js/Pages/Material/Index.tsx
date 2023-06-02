import { Book, BookDB } from "../../Models/Book";
import { motion } from "framer-motion";
import React from "react";
import useTranslate from "../../Hooks/useTranslate";
import { Inertia } from "@inertiajs/inertia";
import Header from "../../Components/Header";
import { ArrowRight2 } from "iconsax-react";

const BookCardBase = ({
    name,
    cover,
    onClick,
}: {
    name: string;
    cover: string;
    onClick: () => void;
}) => {
    return (
        <div className="rounded-xl hover:scale-105 transition-transform flex flex-col items-center border-[3px] p-4 sm:p-8 w-fit border-blueblack-400 bg-white">
            <img
                className="rounded-xl border-[3px] w-[300px] h-[425px] object-cover border-blueblack-200"
                src={cover}
            />
            <div className="py-6 flex items-center gap-2 sm:gap-4 mt-4">
                <h3 className="text-2xl font-medium">{name}</h3>
                <div className="rounded-full flex-shrink-0 flex gap-4 items-center justify-between py-2 px-4 bg-pink-100">
                    <div className="w-2 aspect-square rounded-full bg-pink-500"></div>
                    <img
                        className="w-6 opacity-70"
                        src="images/decore/book.png"
                    />
                </div>
            </div>
            <button
                onClick={onClick}
                className="cursor-pointer hover:scale-105 hover:bg-blueblack-500 transition-all rounded-full p-4 bg-pink-500 w-fit"
            >
                <ArrowRight2 className="text-white" />
            </button>
        </div>
    );
};

const BookCard = ({ book }: { book: Book }) => {
    const goToBook = () => {
        book.videos.length > 0
            ? Inertia.get(`books/${book.id}`)
            : window.open(book.pdf, "_blank");
    };
    return (
        <BookCardBase name={book.name} cover={book.cover} onClick={goToBook} />
    );
};

export default function Index({ booksDB }: { booksDB: BookDB[] }) {
    const books = booksDB.map((book) => new Book(book));
    const t = useTranslate();
    return (
        <>
            <div className="container">
                <Header
                    title={t("المواد الدراسية", "Study Material")}
                    desc={t(
                        <>
                            اكتشف طريق النجاح <br />
                            واستكشف موادنا الدراسية.
                        </>,
                        <>
                            Unlock the Keys to Success <br />
                            Dive into Our Study Material
                        </>
                    )}
                    imgSlug="material"
                />
                <div className="grid md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-8">
                    <BookCardBase
                        name="Piano Info"
                        cover="images/piano_info.jpg"
                        onClick={() => Inertia.get("articles")}
                    />
                    {books.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            </div>
            <section className="m-10"></section>
        </>
    );
}
