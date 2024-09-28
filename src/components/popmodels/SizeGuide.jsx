import CancelX from "../svg-icons/CancelX";
import Image from "next/image";
import guide from "@/images/guide.jpg";
import { useContext } from "react";
import { BlenderDetailsContext } from "@/app/blenders/[id]/page";

export default function SizeGuide() {
    const {tableGuideModel, handleToggleTable} = useContext(BlenderDetailsContext)
  return (
    <>{tableGuideModel && 
        <main className="w-screen">
            <div id="overlay" className="w-screen h-screen bg-slate-900/50 absolute inset-0 z-[104]"></div>
            <section id="table-size-guide" className="w-[80%] absolute bg-white p-4 rounded-lg z-[106] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[30em] overflow-x-scroll">
                <aside>
                    <div className="flex justify-between w-full py-4">
                                <h2>Size Guide</h2>
                                <button onClick={handleToggleTable}>
                                    <CancelX />
                                </button>
                    </div>
                    <table className="">
                        <tr id="xxs1">
                            <th className="border-[1px] border-neutral-400 text-[0.75em] font-semibold text-neutral-800 py-2 px-4 text-center">Sizes</th>
                            <th className="border-[1px] border-neutral-400 text-[0.75em] font-semibold text-neutral-800 py-2 px-4 text-center">US</th>
                            <th className="border-[1px] border-neutral-400 text-[0.75em] font-semibold text-neutral-800 py-2 px-4 text-center">UK</th>
                            <th className="border-[1px] border-neutral-400 text-[0.75em] font-semibold text-neutral-800 py-2 px-4 text-center">EUR</th>
                            <th className="border-[1px] border-neutral-400 text-[0.75em] font-semibold text-neutral-800 py-2 px-4 text-center">China</th>
                            <th className="border-[1px] border-neutral-400 text-[0.75em] font-semibold text-neutral-800 py-2 px-4 text-center">Chest (cm) Poitrine <span className="block">صدر</span></th>
                            <th className="border-[1px] border-neutral-400 text-[0.75em] font-semibold text-neutral-800 py-2 px-4 text-center">Waist (cm) Taille <span className="block">خصر</span></th>
                            <th className="border-[1px] border-neutral-400 text-[0.75em] font-semibold text-neutral-800 py-2 px-4 text-center">Hips (cm) Hanches <span className="block">أرداف</span></th>
                            <th className="border-[1px] border-neutral-400 text-[0.75em] font-semibold text-neutral-800 py-2 px-4 text-center">Leg length (cm) Longueur de jambe <span className="block">طول الرجل</span></th>
                            <th className="border-[1px] border-neutral-400 text-[0.75em] font-semibold text-neutral-800 py-2 px-4 text-center">Neck (cm) Tour de cou <span className="block">رقبة</span></th>
                            <th className="border-[1px] border-neutral-400 text-[0.75em] font-semibold text-neutral-800 py-2 px-4 text-center">Sleeve (cm) Manche <span className="block">كم</span></th>
                        </tr>
                        <tr id="xs2">
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">XXS</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">30</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">30</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">40</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">-</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">76-81.5</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">66</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">-</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">-</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">33-34</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">77-79</td>
                        </tr>
                        <tr id="s3">
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">XS</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">32</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">32</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">42</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">160</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">84-86</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">68-71</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">＜88</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">&#x003C;82.5</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">33-34</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">80-81</td>
                        </tr>
                        <tr id="s4">
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">S</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">32</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">32</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">44</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">165/88-90</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">89-94</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">73-79</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">88-96</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">82.5</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">36-37</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">82-84</td>
                        </tr>
                        <tr id="m5">
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">S</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">36</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">36</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">46</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">165/88-90</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">89-94</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">73-79</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">88-96</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">82.5</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">36-37</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">82-84</td>
                        </tr>
                        <tr id="m6">
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">M</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">40</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">40</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">50</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">170/96-98</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">96-102</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">81-86</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">96-104</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">83</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">38-39</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">85-86</td>
                        </tr>
                        <tr id="l7">
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">L</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">42</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">42</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">52</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">175/108-110</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">107-112</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">91-97</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">104-112</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">83.5</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">40.42</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">87-89</td>
                        </tr>
                        <tr id="l8">
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">L</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">44</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">44</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">54</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">175/108-110</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">107-112</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">91-97</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">104-112</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">83.5</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">40.42</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">87-89</td>
                        </tr>
                        <tr id="xl9">
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">XL</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">46</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">46</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">56</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">180/118-122</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">116-122</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">101-107</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">112-120</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">84</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">43.45</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">90-91</td>
                        </tr>
                        <tr id="xxl10">
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">XXL</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">48</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">48</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">58</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">185/126-130</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">127-132</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">111-117</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">120-128</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">84.5</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">46-47</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">91-93</td>
                        </tr>
                        <tr id="xxxl11">
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">XXXL</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">50</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">50</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">60</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">-</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">137-140</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">127-132</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">128-136</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">85</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">48-49</td>
                            <td className="border-[1px] border-neutral-400 py-2 px-4 text-neutral-700 text-center text-[0.65em]">93-94</td>
                        </tr>
                    </table>
                </aside>
                <aside className="my-8 px-8">
                    <div>
                        <h2 className="text-neutral-900 uppercase text-[0.875em] font-bold">How to Measure</h2>
                        <ol className="list-decimal">
                            <li>
                                <p className="uppercase text-[0.75em]">Neck Size</p>
                                <p className="text-neutral-900 text-[0.75em]">Use the tape to measure around the base of your neck, where it meets your shoulders. Put a finger between your neck and the tape measure for a more loose fit collar
                                </p>
                            </li>
                            <li>
                                <p className="uppercase text-[0.75em]">sleeve</p>
                                <p className="text-neutral-900 text-[0.75em]">Bend your elbow and put your hand on your hip. Ask your friend to measure from middle of back of your neck, around shoulder and elbow to wrist bone.</p>
                            </li>
                            <li>
                                <p className="uppercase text-[0.75em]">chest width</p>
                                <p className="text-neutral-900 text-[0.75em]">This measurement should be taken beneath your armpits, around the widest part of your chest and shoulder blades. Make sure to keep the tape measure horizontal, and don’t pull to tight or hold your breath while measuring.</p>
                            </li>
                            <li>
                                <p className="uppercase text-[0.75em]">waist</p>
                                <p className="text-neutral-900 text-[0.75em]">Put the tape around your natural waistline, which should be close to your bellybutton. Put one finger between the tape and your body before you measure.</p>
                            </li>
                            <li>
                                <p className="uppercase text-[0.75em]">inseam (leg length)</p>
                                <p className="text-neutral-900 text-[0.75em]">This is measured between your groin and your lower ankle. You might find that is most easily measured on a pair of pants that already suit you.</p>
                            </li>
                        </ol>
                    </div>
                </aside>
                <aside>
                    <div className="flex justify-center items-center w-full h-[19em]">
                        <div className="h-full w-[15em] relative">
                            <Image fill src={guide} alt="Size guide image" style={{objectFit:"contain"}}/>
                        </div>
                    </div>
                </aside>
            </section>
        </main>
    }
    </>
    )
}
