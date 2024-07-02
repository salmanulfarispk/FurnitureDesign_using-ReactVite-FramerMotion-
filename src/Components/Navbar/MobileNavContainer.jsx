import React from 'react';
import { Link } from 'react-scroll';
import { motion } from "framer-motion";

const MobileNavContainer = ({ setOpen, name, link }) => {
  return (
    <div className='flex flex-col items-center py-2'>
      <Link
        to={link}
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={50}
        duration={500}
        isDynamic={true}
        ignoreCancelEvents={false}
        spyThrottle={500}
        onClick={() => setOpen(false)}
      >
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "tween", duration: 1 }}
        >
          <div className="pt-4">
            <h3 className="text-sm font-medium font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark">
              {name}
            </h3>
          </div>
        </motion.div>
      </Link>
    </div>
  );
};

export default MobileNavContainer;
