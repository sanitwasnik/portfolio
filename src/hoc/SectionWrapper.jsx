import { motion } from "framer-motion";

// /for animation purpopse
// if want seo we basic 
// search engine optimisationn 
//intial stage this will nt be the isssue 
// Purpose of the service the product 
// landing page 
// /it will crate curosity 
// 1. Landing Page   *****
// 2.producrt
// 3. Issue  the we get 
// basic building  
// the lp give us prioriyt
//console is clear 
// Once i deploy , i will check SEo 
// oncre delployment done move to product pipeline 
// deadline for  deploy is  after 3 days
// changes 
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <span className='hash-span' id={idName}>
                    &nbsp;
                </span>

                <Component />
            </motion.section>
        );
    };

export default SectionWrapper;