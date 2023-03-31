// import FooterTeacherButton from "@/components/footer/FooterTeacherButton";
// import Sheet, { SheetRef } from 'react-modal-sheet';
// import { useRef, useState } from 'react';
// import FooterButton from "@/components/footer/FooterButton";


// export default function test() {
//     const [isOpen, setOpen] = useState(true);
//     const ref = useRef<SheetRef>();
//     const snapTo = (i: number) => ref.current?.snapTo(i);


//     return (
//         <>
//             <div style={{ marginTop: '100px' }}>
//                 <button onClick={() => setOpen(!isOpen)}>Open sheet</button>

//                 {/* Opens to 400 since initial index is 1 */}
//                 <Sheet
//                     ref={ref}
//                     isOpen={isOpen}
//                     onClose={() => setOpen(!isOpen)}
//                     snapPoints={[140, 120]}
//                     initialSnap={1}
//                     springConfig={{
//                         stiffness: 400,
//                         damping: 20,
//                         mass: 0.2,
//                     }}
//                     draggable={false}
//                     onSnap={snapIndex =>
//                         console.log('> Current snap point index:', snapIndex)
//                     }
//                 >
//                     <Sheet.Container style={{ zIndex: 0 }}>
//                         <button onClick={() => snapTo(0)}>Snap to index 0</button>
//                         <button onClick={() => snapTo(1)}>Snap to index 1</button>
//                     </Sheet.Container>
//                     <FooterButton inputvalue="구매하기" />
//                 </Sheet>


//             </div>
//         </>
//     );
// }

import React, { useState } from 'react'
import styled from 'styled-components'
import myStyle from '../components/footer/FooterTeacherButton.module.css'
import Sheet, { SheetRef } from 'react-modal-sheet';

import { useRef } from 'react';


const OrderToggleButton = styled.div`
  width: 40px;
  height: 5px;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  margin-bottom: 1rem;
`
const OrderButton = styled.div`
  width: 100%;
  border-radius: 30px;
  background-color: rgb(0, 155, 57);
  color: white;
  font-size: 1.1rem;
  font-weight: 300;
  text-align: center;
  padding: 8px 0;
`

export default function ProductOrderSection() {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const ref = useRef<SheetRef>();


    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className={isOpen ? myStyle.productOrderSectionOpen : myStyle.productOrderSection}>
                {
                    !isOpen ? <OrderToggleButton onClick={handleOpen} /> : null
                }

                <OrderButton onClick={handleOpen}>주문하기</OrderButton>
            </div>
            <Sheet
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                detent="content-height"
                style={{
                    zIndex: 100,
                }}
                springConfig={{
                    stiffness: 400,
                    damping: 20,
                    mass: 0.2,
                }}
                draggable={false}

            >
                <Sheet.Container>
                    <Sheet.Content>
                        <div style={{ height: '300px', boxSizing: 'border-box', paddingTop: '1rem' }}>
                            <OrderToggleButton onClick={() => setIsOpen(false)} />
                            <div style={{
                                // position: 'fixed',
                                // bottom: 0,
                                width: '100%',
                                padding: '1rem',
                                boxSizing: 'border-box',
                                display: 'flex',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                flexDirection: 'column',
                            }}>
                                <div style={{ width: '90%', backgroundColor: '#f7f7f7', height:'80px' }}>
                                    <p>23 SS 체리 튤립 로맨틱 워터보틀 384ml</p>
                                    <div style={{ display: 'flex' }}>
                                        <div style={{ width: '50%' ,backgroundColor: '#f7f7f7'}}>
                                            <button>-</button>
                                            <span>1</span>
                                            <button>+</button>
                                        </div>
                                        <div style={{ width: '50%', textAlign: 'end' }}>33,000원</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ padding: '1rem', marginRight: '1rem' }}>
                                <p style={{ textAlign: 'end' }}><span>합계</span>33,000 <span>원</span></p>
                            </div>
                        </div>
                    </Sheet.Content>
                </Sheet.Container>
            </Sheet>
        </>
    );
}