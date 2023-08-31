import { faCirclePlay } from "@fortawesome/free-solid-svg-icons/faCirclePlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Book, BookDB } from "../../Models/Book";
import { motion } from "framer-motion";
import React from "react";
import useTranslate from "../../Hooks/useTranslate";
import { Inertia } from "@inertiajs/inertia";
import VideosScreen from "../../Components/VideosScreen";
enum Screen {
    Books,
    Videos,
}
export default function Index({ bookDB }: { bookDB: BookDB }) {
    const book = new Book(bookDB);
    const t = useTranslate();
    return (
        <>
            <section className="bg-ov-white">
                <div className="container lg:py-16 py-4 grid grid-rows-auto gap-4 text-center lg:text-align-inherit lg:grid-cols-2 items-center justify-between">
                    <div>
                        <motion.h3
                            initial={{ x: -300, opacity: 0 }}
                            transition={{ duration: 1, type: "spring" }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl lg:text-5xl mb-4 lg:mb-8  font-bold uppercase"
                        >
                            {t("طرق", "")} <br />{" "}
                            <span className="highlight-header">
                                {t("عزفية", "Methods")}
                            </span>
                        </motion.h3>
                        <motion.p
                            initial={{ x: -300, opacity: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.5,
                                type: "spring",
                            }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-xl font-[500]"
                        >
                            {t(
                                "من أهم الطرق العزفية",
                                "Among the most important methods"
                            )}
                            {" "}
                            {book.name}
                        </motion.p>
                    </div>
                    <div className="h-[400px]">
                        <motion.img
                            initial={{ x: 300, opacity: 0, scale: 1 }}
                            transition={{ duration: 1, type: "spring" }}
                            whileHover={{ scale: 1.05 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="h-full w-full object-contain mx-auto"
                            src="/images/material.png"
                            alt=""
                        />
                    </div>
                </div>
            </section>
            <div className="container my-8">
                    {book ? (
                        <VideosScreen videos={book.videos} />
                    ) : (
                        ""
                    )}
                    <a
                        className="btn block my-4 mx-auto w-fit hover:text-white"
                        href={book?.pdf}
                        target="_blank"
                    >
                        Download PDF
                    </a>
            </div>
            <section className="m-10"></section>
        </>
    );
}
