import { motion } from "framer-motion";
import logo from "../../assets/Images/logo1.jpeg";
import  './About.css'

function About() {
  return (
    <div className=" flex flex-col items-center  bg-[#f2e6c8] text-[#141414] overflow-hidden  gap-y-10 ptop pbo">

      {/* HERO */}
      <section className="h-fit  flex flex-col justify-center items-center text-center px-6 gap-y-4 ptop">
        <motion.img
          src={logo}
          alt="Soar by Lola Logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-30 md:w-42 mb-10 rounded-full"
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl md:text-6xl tracking-widest uppercase mb-6"
        >
          Soar by Lola
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-2xl text-lg md:text-xl tracking-wide leading-relaxed"
        >
          A fashion brand rooted in confidence, expression, and elevation.
          Designed for women who are not afraid to rise.
        </motion.p>
      </section>

      {/* STORY */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center padleftright">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl tracking-widest uppercase mb-8">
            Our Story
          </h2>

          <p className="text-lg leading-relaxed tracking-wide">
            Soar by Lola was created from a desire to build more than clothing —
            it is a movement. A reminder that style is power, and power begins
            with self-belief.
            <br /><br />
            Every piece is thoughtfully designed to elevate your presence,
            amplify your confidence, and help you step boldly into every room.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-[#141414]/20 p-10 flex justify-center align-center"
        >
          <p className="text-xl italic tracking-wide ">
            “Soar is not just about how you look —
            <br />
            it’s about how high you’re willing to rise.”
          </p>
        </motion.div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-[#141414] text-[#f2e6c8] px-6">
        <div className="max-w-6xl mx-auto padleftright pad">
          <h2 className="text-3xl md:text-4xl tracking-widest uppercase mb-16 text-center">
            Our Values
          </h2>

          <div className="grid md:grid-cols-3 gap-12 ">
            {[
              { title: "Confidence", text: "We design pieces that empower and elevate." },
              { title: "Elegance", text: "Luxury is intentional, timeless, and refined." },
              { title: "Expression", text: "Fashion is freedom. Wear your truth boldly." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="border border-[#f2e6c8]/30 p-8 padleftright"
              >
                <h3 className="text-xl tracking-widest uppercase mb-4">
                  {item.title}
                </h3>
                <p className="tracking-wide leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LOGO MEANING */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl tracking-widest uppercase mb-8"
        >
          The Soar Symbol
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-lg leading-relaxed tracking-wide"
        >
          Our symbol represents elevation, movement, and inner strength.
          The rising form reflects growth, ambition, and the courage to rise
          above limitations.
        </motion.p>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl tracking-widest uppercase mb-10"
        >
          Rise With Us
        </motion.h2>

      </section>
    </div>
  );
}

export default About;
