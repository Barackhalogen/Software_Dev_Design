export const navVariants = {
  
    y: [-10, 10],
    transition: {
        y: {
            duration: 0.3,
            yoyo: Infinity,
            ease: 'easeOut'
        }
    }
    };
    
    export const slideIn = (direction, type, delay, duration) => ({
      hidden: {
        x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
        y: direction === 'up' ? '-100%' : direction === 'down' ? '100%' : 0,
        opacity: 0
      },
      visible: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type,
          delay,
          duration,
          ease: 'easeOut',
        },
      },
    });
    
    export const fadeIn = (direction, type, delay, duration) => ({
      hidden: {
        x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
        y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type,
          delay,
          duration,
          ease: 'easeOut',
        },
      },
    });
    
    export const slideVariants = {
      hidden: {
        y: 40,
        opacity: 0
      },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 2,
          type: 'spring',
          delay: 0.1
            }
      }
    }
    
    export const staggerChildren = {
      hidden: {
        opacity: 0,
        y:-20
      },
      visible: {
        opacity: 1,
        y:0,
        transition:{
          duration: 0.3,
          staggerChildren: 0.05
        },
        exit: {
          opacity: 0,
          y:-20,
          transition:{
            duration: 0.3,
            staggerChildren: 0.05
          },
        }
      },
      children:{
        hidden: {
    
        },
        visible: {
     
          transition: {
            duration: 0.1,
            type: "spring",
    
          }
        }
      }
    }

    export const loaderVariants = {
      move: {
          y: [-100, 200],
          transition: {

              x: {
                  duration: 0.5,
                  yoyo: Infinity
              },
              y: {
                  duration: 0.5,
                  yoyo: Infinity,
            
              }
          }
      }
  }