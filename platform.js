(() => {
  const app = window.AtomLabApp;
  const storageKey = "atomlab.learning.v1";
  const validViews = new Set(["home", "learn", "quiz", "lab", "saved", "progress"]);
  const lessons = [
    {
      id: "atom",
      title: "Атом гэж юу вэ?",
      category: "Суурь ойлголт",
      duration: "4 МИН",
      summary: "Бодисыг бүрдүүлдэг атомын тухай анхны ойлголтоо аваарай.",
      definition: "Атом бол химийн элементийн шинжийг хадгалсан хамгийн жижиг нэгж.",
      sections: [
        ["Атомын тухай", "Бүх энгийн бодис химийн элементүүдийн атомаас тогтоно. Атом нь төв хэсгийн цөм болон түүнийг хүрээлэх электронуудаас бүрддэг. Цөмд эерэг цэнэгтэй протон, цэнэггүй нейтрон байдаг; электрон сөрөг цэнэгтэй."],
        ["Атом ба молекул", "Олон бодисын жижиг хэсэг молекул байдаг. Молекул нь нэг эсвэл хэд хэдэн атом химийн холбоогоор холбогдсоноос үүснэ. Жишээлбэл, усны молекул H₂O нь хоёр устөрөгч, нэг хүчилтөрөгчийн атомтай."]
      ],
      example: "Гелийн атомын цөмд 2 протон байдаг тул атомын дугаар нь 2. Саармаг гелийн атом 2 электронтой.",
      note: "Атомын дүрслэл дэх зай, бөөмсийн хэмжээг бодит хэмжээнд харьцуулж үзүүлээгүй."
    },
    {
      id: "parts",
      title: "Атомын бүтэц",
      category: "Суурь ойлголт",
      duration: "5 МИН",
      summary: "Цөм ба электрон бүрхүүлийн үүргийг ялгаж сурна.",
      definition: "Атомын төв дэх цөм протон, нейтроноос; цөмийн гаднах хэсэг электронуудаас бүрдэнэ.",
      sections: [
        ["Цөм", "Протон болон нейтрон цөмд байрладаг. Цөмийн хэмжээ атомын хэмжээнээс хавьгүй жижиг боловч атомын бараг бүх масс цөмд төвлөрнө."],
        ["Электрон бүрхүүл", "Электронууд цөмийн гаднах энергийн түвшнүүдэд байрлана. Эдгээрийг сургалтын хялбаршуулсан загварт давхраа буюу бүрхүүлээр үзүүлдэг."]
      ],
      example: "Саармаг нүүрстөрөгч-12 атомд 6 протон, 6 нейтрон, 6 электрон байна.",
      note: "Электроныг жижиг гариг шиг яг тодорхой тойрог замаар хөдөлдөг гэж ойлгож болохгүй; Борын загвар нь ойлгуулах хялбаршуулалт юм.",
      illustration: "atom"
    },
    {
      id: "parts-particles",
      title: "Протон, нейтрон, электрон",
      category: "Суурь ойлголт",
      duration: "5 МИН",
      summary: "Атомыг бүрдүүлэгч гурван үндсэн бөөмийн цэнэг, байрлалыг харьцуул.",
      definition: "Протон эерэг, электрон сөрөг, нейтрон цахилгаан цэнэггүй.",
      sections: [
        ["Бөөмсийн шинж", "Протон ба нейтрон цөмд оршино. Электрон цөмийн гаднах бүсэд байна. Протоны цэнэг +1e, электроных −1e, нейтроных 0."],
        ["Харьцангуй масс", "Протон, нейтроны масс ойролцоо бөгөөд электроны массаас хавьгүй их. Тиймээс атомын масс бараг бүхэлдээ цөмд төвлөрдөг."]
      ],
      example: "Саармаг атомд протоны тоо электроны тоотой тэнцүү тул нийт цахилгаан цэнэг 0.",
      note: "Энд +1e, −1e тэмдэглэгээ нь бөөмийн энгийн цахилгаан цэнэгийг илэрхийлнэ."
    },
    {
      id: "numbers",
      title: "Атомын дугаар ба массын тоо",
      category: "Суурь ойлголт",
      duration: "5 МИН",
      summary: "Элементийн атомын дугаар, изотопын массын тоог тооцоол.",
      definition: "Атомын дугаар Z нь цөм дэх протоны тоо; массын тоо A нь протон ба нейтроны нийлбэр.",
      sections: [
        ["Атомын дугаар Z", "Протоны тоо тухайн атом аль элемент болохыг тодорхойлдог. Цөмдөө 8 протонтой бүх атом хүчилтөрөгчийн атом."],
        ["Массын тоо A", "Тодорхой нэг атомын цөм дэх протон, нейтроны тоог бүхэл тоогоор нэмж олно: A = Z + N. Электроныг массын тоонд нэмдэггүй."]
      ],
      example: "Нүүрстөрөгч-12: Z = 6 протон, N = 6 нейтрон, A = 6 + 6 = 12.",
      note: "Массын тоо нь нэг изотопын бүхэл тоо; үелэх системд түгээмэл үзүүлдэг харьцангуй атом масс ихэвчлэн изотопуудын жигнэсэн дундаж байдаг."
    },
    {
      id: "shells",
      title: "Электроны давхраа",
      category: "Электроны бүтэц",
      duration: "5 МИН",
      summary: "Электрон цөмийн гаднах энергийн түвшнүүдэд хэрхэн байрлахыг судал.",
      definition: "Электроны давхраа нь атомын цөмийн гаднах электроны энергийн түвшнийг хялбаршуулан дүрсэлдэг.",
      sections: [
        ["Давхрааны тэмдэглэгээ", "Сургуулийн энгийн загварт давхрааг K, L, M, N гэж дотроос нь гадагш нэрлэнэ. Электроны тоо давхраануудад хуваарилагдаж, хамгийн гаднах давхраа химийн шинжид чухал нөлөөтэй."],
        ["Загварын хязгаар", "Давхрааны зураг нь электроныг яг хаана байгааг харуулахгүй. Бодит атомын электрон төлөвийг квант механик загвар илүү нарийн тайлбарладаг."]
      ],
      example: "Нүүрстөрөгчийн 6 электрон сургалтын бүрхүүлийн загварт K давхраанд 2, L давхраанд 4 гэж харагдана.",
      note: "Давхраанд харагдах тоо нь загварын хялбаршуулалт бөгөөд атомыг бодит хэмжээнд дүрсэлсэн зураг биш."
    },
    {
      id: "distribution",
      title: "Электроны хуваарилалт",
      category: "Электроны бүтэц",
      duration: "6 МИН",
      summary: "Хөнгөн элементүүдийн электроныг давхраанд хуваарилж сур.",
      definition: "Электроны хуваарилалт гэдэг нь атомын электроныг энергийн түвшин, бүрхүүлүүдэд байрлуулахыг хэлнэ.",
      sections: [
        ["Дүүрэх дараалал", "Электронууд хамгийн бага энергитэй төлөвөөс эхлэн байрлана. Эхний давхраа 2 электрон багтаана; дараагийн давхраануудын хуваарилалт нь дэд түвшний энергиэс хамаарна."],
        ["Сургалтын жишээ", "Эхний 20 элементийн хувьд 2, 8, 8, 2 гэсэн хялбаршуулсан бүрхүүлийн хуваарилалт түгээмэл хэрэглэгддэг. Шилжилтийн элементүүдийг илүү нарийвчлахын тулд дэд түвшнийг хамтад нь үзэх хэрэгтэй."]
      ],
      example: "Натрийн 11 электрон K, L, M давхраанд 2, 8, 1 гэж хуваарилагдана.",
      note: "Бүх элементэд давхрааг дангаар нь дүүргэж тоолох нь хангалтгүй; электроны орбиталь, дэд түвшний дүрэм мөн хамаарна."
    },
    {
      id: "periodic",
      title: "Үелэх системийн бүтэц",
      category: "Үелэх систем",
      duration: "5 МИН",
      summary: "Элементүүдийн хүснэгтэн байрлал юуг илэрхийлдгийг ойлго.",
      definition: "Үелэх систем элементүүдийг атомын дугаарын өсөх дарааллаар байрлуулж, төстэй шинжийг бүлэг, үеэр харуулдаг.",
      sections: [
        ["Мөр ба багана", "Хэвтээ мөрийг үе, босоо баганыг бүлэг гэдэг. Үе дотор атомын дугаар зүүнээс баруун тийш өснө. Нэг бүлгийн элементүүдийн химийн шинж олон талаар төстэй."],
        ["Хүснэгтийг унших", "Нүдэнд ихэвчлэн элементийн тэмдэг, нэр, атомын дугаар болон атомын масс зэрэг мэдээлэл байна. Лантаноид, актиноидыг доод мөрөнд зай хэмнэхээр тусад нь харуулдаг."]
      ],
      example: "Натри (Na) ба лити (Li) үелэх системийн 1-р бүлгийн элементүүд бөгөөд хоёулаа шүлтийн металл.",
      note: "Устөрөгчийг 1-р бүлгийн дээр байрлуулдаг ч ердийн шүлтийн металлуудаас шинжээрээ ялгаатай."
    },
    {
      id: "groups",
      title: "Элементүүдийн бүлэг, үе",
      category: "Үелэх систем",
      duration: "5 МИН",
      summary: "Бүлэг ба үеийн ялгааг, хүснэгтээс мэдээлэл унших аргыг давт.",
      definition: "Бүлэг нь үелэх системийн босоо багана, үе нь хэвтээ мөр юм.",
      sections: [
        ["Бүлэг", "Үндсэн бүлгийн элементүүд ижил тооны валентын электронтой байх нь химийн шинж төстэй байх нэг шалтгаан болдог. Шилжилтийн металлын электроны бүтэц илүү нарийн."],
        ["Үе", "Үеийн дугаар нь үндсэн төлөвийн атомд эзлэгдсэн хамгийн өндөр үндсэн энергийн түвшинтэй холбоотой. Үелэх хуулиар элементүүдийн шинж атомын дугаартайгаа үе үе давтагдана."]
      ],
      example: "Хлор (Cl) 3-р үед, 17-р бүлэгт байдаг; энэ нь түүнийг галоген гэдгийг илтгэнэ.",
      note: "Бүлгийн дугаар ба валентын электроны тоог шилжилтийн бүх элементэд шууд адилтгаж болохгүй."
    },
    {
      id: "metals",
      title: "Металл ба металл биш",
      category: "Үелэх систем",
      duration: "5 МИН",
      summary: "Металл, металл биш, хагас металлын нийтлэг шинжийг ялга.",
      definition: "Металл, металл биш, хагас металл гэдэг нь элементүүдийг нийтлэг физик, химийн шинжээр нь ангилсан бүлгүүд.",
      sections: [
        ["Металл", "Олон металл цахилгаан, дулааныг сайн дамжуулж, гялалзсан гадаргуутай, давтаж хэлбэржүүлэх боломжтой байдаг. Гэхдээ эдгээр нь нийтлэг шинж болохоос бүх металлд ижил хэмжээгээр хамаарахгүй."],
        ["Металл биш ба хагас металл", "Металл бишүүдийн шинж олон янз; зарим нь хий, зарим нь хатуу эсвэл шингэн. Хагас металлын цахилгаан дамжуулах шинж нь металл ба металл бишийн дунд байдаг."]
      ],
      example: "Зэс металл, хүчилтөрөгч металл биш, цахиур хагас металлд багтана.",
      note: "Элементүүдийн ангиллын зааг, ялангуяа хагас металлын хувьд, эх сурвалжаас хамаарч бага зэрэг ялгаатай байж болно."
    },
    {
      id: "ions",
      title: "Ионы тухай үндсэн ойлголт",
      category: "Электроны бүтэц",
      duration: "6 МИН",
      summary: "Электрон алдах, авахад ион ба цэнэг хэрхэн үүсэхийг тооц.",
      definition: "Ион бол электроны тоо протоны тоотой тэнцүү биш болсон цахилгаан цэнэгтэй атом эсвэл атомын бүлэг.",
      sections: [
        ["Катион", "Атом электрон алдахад электроны сөрөг цэнэг багасаж, нийт цэнэг эерэг болдог. Эерэг цэнэгтэй ионыг катион гэнэ."],
        ["Анион", "Атом электрон авахад нэмэлт сөрөг цэнэгтэй болж, нийт цэнэг сөрөг болно. Сөрөг цэнэгтэй ионыг анион гэнэ."]
      ],
      example: "Натри 11 протонтой. 1 электрон алдвал 10 электронтой Na⁺ ион үүсч, нийт цэнэг нь +1 болно.",
      note: "Ион үүсэхэд протоны тоо өөрчлөгдөхгүй. Протоны тоо өөрчлөгдвөл химийн элемент өөр болно."
    }
  ];

  const questionBank = [
    { level: "beginner", question: "Устөрөгчийн атомын дугаар хэд вэ?", options: ["1", "2", "0", "8"], answer: "1", explanation: "Устөрөгчийн цөмд 1 протон байдаг тул атомын дугаар нь 1." },
    { level: "beginner", question: "Протон ямар цахилгаан цэнэгтэй вэ?", options: ["Эерэг", "Сөрөг", "Цэнэггүй", "Хувьсах"], answer: "Эерэг", explanation: "Протон +1e эерэг цэнэгтэй бөөм." },
    { level: "beginner", question: "Саармаг атомд протоны ба электроны тоо ямар байдаг вэ?", options: ["Тэнцүү", "Протон үргэлж олон", "Электрон үргэлж олон", "Хоёулаа 0"], answer: "Тэнцүү", explanation: "Саармаг атомын нийт цэнэг 0 тул эерэг, сөрөг цэнэгийн тоо тэнцэнэ." },
    { level: "beginner", question: "Атомын цөмд ямар бөөмс байдаг вэ?", options: ["Протон ба нейтрон", "Зөвхөн электрон", "Протон ба электрон", "Электрон ба нейтрон"], answer: "Протон ба нейтрон", explanation: "Цөмийг протон ба нейтрон бүрдүүлдэг; электрон цөмийн гадна байрлана." },
    { level: "beginner", question: "Электроны цэнэг ямар вэ?", options: ["Сөрөг", "Эерэг", "Цэнэггүй", "Протоны цэнэгтэй"], answer: "Сөрөг", explanation: "Электрон −1e сөрөг цэнэгтэй." },
    { level: "beginner", question: "Массын тоог хэрхэн олдог вэ?", options: ["Протон + нейтрон", "Протон + электрон", "Нейтрон − протон", "Электрон + нейтрон"], answer: "Протон + нейтрон", explanation: "Массын тоо A = Z + N буюу протон ба нейтроны нийлбэр." },
    { level: "beginner", question: "Хүчилтөрөгчийн химийн тэмдэг аль вэ?", options: ["O", "Ox", "H", "C"], answer: "O", explanation: "Хүчилтөрөгчийн химийн тэмдэг O, атомын дугаар нь 8." },
    { level: "beginner", question: "Үелэх системийн хэвтээ мөрийг юу гэдэг вэ?", options: ["Үе", "Бүлэг", "Изотоп", "Ион"], answer: "Үе", explanation: "Хэвтээ мөрийг үе, босоо баганыг бүлэг гэдэг." },
    { level: "intermediate", question: "Саармаг нүүрстөрөгч-12 атом хэдэн нейтронтой вэ?", options: ["6", "12", "18", "0"], answer: "6", explanation: "Нүүрстөрөгчийн Z=6, A=12. Нейтроны тоо A−Z=12−6=6." },
    { level: "intermediate", question: "Натрийн саармаг атомын электрон хуваарилалт аль вэ?", options: ["2, 8, 1", "2, 7, 2", "2, 8, 8", "2, 1, 8"], answer: "2, 8, 1", explanation: "Натри 11 электронтой; хялбаршуулсан бүрхүүлийн хуваарилалт нь 2, 8, 1." },
    { level: "intermediate", question: "Хлорын саармаг атом хэдэн валентын электронтой вэ?", options: ["7", "1", "8", "17"], answer: "7", explanation: "Хлорын бүрхүүлийн хуваарилалт 2, 8, 7 тул гаднах давхраанд 7 электронтой." },
    { level: "intermediate", question: "8 протон, 10 электронтой бөөмийн цэнэг хэд вэ?", options: ["−2", "+2", "0", "−10"], answer: "−2", explanation: "Цэнэг = протон − электрон = 8 − 10 = −2." },
    { level: "intermediate", question: "Хоёр элемент нэг бүлэгт байвал тэдгээрийн ямар шинж ихэвчлэн төстэй байдаг вэ?", options: ["Химийн шинж", "Массын тоо", "Нейтроны тоо", "Атомын дугаар"], answer: "Химийн шинж", explanation: "Үндсэн бүлгийн элементүүдийн валентын электрон төстэй тул химийн шинж нь олон талаар төстэй." },
    { level: "intermediate", question: "Na⁺ ион саармаг натритай харьцуулахад юу алдсан бэ?", options: ["Нэг электрон", "Нэг протон", "Нэг нейтрон", "Хоёр электрон"], answer: "Нэг электрон", explanation: "Na⁺ эерэг цэнэгтэй; саармаг натри нэг электроноо алдахад ийм цэнэг үүснэ." },
    { level: "intermediate", question: "Хүчилтөрөгчийн саармаг атомын давхрааны хуваарилалт аль вэ?", options: ["2, 6", "2, 8", "4, 4", "8"], answer: "2, 6", explanation: "Хүчилтөрөгч 8 электронтой: эхний давхраанд 2, хоёр дахь давхраанд 6." },
    { level: "intermediate", question: "Изотопуудын аль шинж өөр байдаг вэ?", options: ["Нейтроны тоо", "Протоны тоо", "Элементийн нэр", "Атомын дугаар"], answer: "Нейтроны тоо", explanation: "Нэг элементийн изотопуудын протоны тоо адил, нейтроны тоо өөр." },
    { level: "advanced", question: "17 протон, 18 нейтрон, 18 электронтой бөөмийн массын тоо ба цэнэг аль вэ?", options: ["A=35, −1", "A=36, +1", "A=35, +1", "A=17, 0"], answer: "A=35, −1", explanation: "Массын тоо 17+18=35; цэнэг 17−18=−1." },
    { level: "advanced", question: "Химийн элемент ямар бөөмийн тоогоор тодорхойлогддог вэ?", options: ["Протоны тоо", "Нейтроны тоо", "Электроны тоо", "Протон ба нейтроны нийлбэр"], answer: "Протоны тоо", explanation: "Атомын дугаар нь протон бөгөөд элементийн таних шинж юм." },
    { level: "advanced", question: "Изотопын массын тоо A=23, атомын дугаар Z=11 бол нейтроны тоо хэд вэ?", options: ["12", "11", "23", "34"], answer: "12", explanation: "N=A−Z=23−11=12 нейтрон." },
    { level: "advanced", question: "Саармаг хүчилтөрөгч 2 электрон авбал ямар бөөм үүсэх вэ?", options: ["O²⁻ анион", "O²⁺ катион", "Хүхрийн атом", "Нейтрон"], answer: "O²⁻ анион", explanation: "Хоёр электрон нэмэгдэхэд цэнэг 2− болно; протоны тоо хэвээр тул хүчилтөрөгч хэвээр." },
    { level: "advanced", question: "Яагаад натрийн ион Na⁺ хэвээрээ натри байдаг вэ?", options: ["Протоны тоо 11 хэвээр", "Нейтроны тоо 0 болдог", "Электроны тоо 11 хэвээр", "Массын тоо атомын дугаартай тэнцдэг"], answer: "Протоны тоо 11 хэвээр", explanation: "Электрон өөрчлөгдсөн ч цөмийн 11 протон хадгалагддаг тул элементийн нэр өөрчлөгдөхгүй." },
    { level: "advanced", question: "Хлорын атомын дугаар 17. Саармаг Cl атом хэдэн электронтой вэ?", options: ["17", "18", "35", "7"], answer: "17", explanation: "Саармаг атомд электрон ба протоны тоо тэнцүү; хлорын Z=17." },
    { level: "advanced", question: "Үелэх системийн 3-р үед орших атомд юу хамгийн багадаа үнэн байх вэ?", options: ["Сургалтын загварт 3 электрон давхраа эзэлнэ", "Заавал 3 нейтронтой", "Атомын дугаар 3", "3-р бүлэгт орно"], answer: "Сургалтын загварт 3 электрон давхраа эзэлнэ", explanation: "Үеийн дугаар нь үндсэн төлөвийн атомын эзлэгдсэн хамгийн өндөр үндсэн энергийн түвшинтэй холбоотой." },
    { level: "advanced", question: "Элемент X нь 12 протонтой, 10 электронтой. X-ийн ионы цэнэг хэд вэ?", options: ["+2", "−2", "0", "+10"], answer: "+2", explanation: "12 эерэг цэнэг, 10 сөрөг цэнэгийн зөрүү +2; энэ нь Mg²⁺ ионы тохиолдол байж болно." }
  ];

  const difficultyLabels = { beginner: "Анхан", intermediate: "Дунд", advanced: "Ахисан" };
  const activityTypes = new Set(["lesson", "quiz", "favorite"]);
  const htmlEscapes = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" };
  const freshState = () => ({ version: 1, completedLessons: [], favorites: [], quizAttempts: [], activity: [] });
  let state;
  let storageAvailable = true;
  let storageWarningShown = false;
  let storedDataInvalid = false;
  let selectedCategory = "";
  let currentLessonId = "";
  let quizSession = null;
  let labState = { protons: 26, neutrons: 30, electrons: 26 };
  let labInitialized = false;

  function notify(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(notify.timer);
    notify.timer = window.setTimeout(() => toast.classList.remove("show"), 3000);
  }

  function isKnownElement(number) {
    return Number.isInteger(number) && number >= 1 && number <= app.elements.length;
  }

  function loadState() {
    let raw;
    try {
      raw = window.localStorage.getItem(storageKey);
    } catch {
      storedDataInvalid = true;
      return freshState();
    }
    if (!raw) return freshState();
    try {
      const saved = JSON.parse(raw);
      if (!saved || saved.version !== 1 || !Array.isArray(saved.completedLessons) ||
          !Array.isArray(saved.favorites) || !Array.isArray(saved.quizAttempts) || !Array.isArray(saved.activity)) {
        throw new TypeError("Суралцах өгөгдлийн бүтэц тохирохгүй байна.");
      }
      const lessonIds = new Set(lessons.map(lesson => lesson.id));
      const attempts = saved.quizAttempts.filter(item =>
        item && ["beginner", "intermediate", "advanced", "daily"].includes(item.mode) &&
        Number.isInteger(item.correct) && item.correct >= 0 && Number.isInteger(item.total) &&
        item.total === (item.mode === "daily" ? 10 : 8) && item.correct <= item.total &&
        item.points === item.correct * 10 && Number.isFinite(item.timestamp) &&
        item.timestamp > 0 && item.timestamp <= Date.now()
      ).slice(-100);
      const activities = saved.activity.filter(item =>
        item && activityTypes.has(item.type) && typeof item.label === "string" &&
        item.label.length <= 180 && Number.isFinite(item.timestamp)
      ).slice(-24);
      return {
        version: 1,
        completedLessons: [...new Set(saved.completedLessons.filter(id => lessonIds.has(id)))],
        favorites: [...new Set(saved.favorites.filter(isKnownElement))],
        quizAttempts: attempts,
        activity: activities
      };
    } catch {
      storedDataInvalid = true;
      return freshState();
    }
  }

  function saveState() {
    if (!storageAvailable) {
      if (!storageWarningShown) {
        notify("Энэ веб хөтөчид хадгалалт боломжгүй байна. Ахиц зөвхөн энэ хуудсыг нээлттэй байхад үлдэнэ.");
        storageWarningShown = true;
      }
      return;
    }
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(state));
    } catch {
      storageAvailable = false;
      if (!storageWarningShown) {
        notify("Өгөгдлийг веб хөтөчид хадгалж чадсангүй. Төхөөрөмжийн хадгалах сан дүүрсэн эсвэл хаалттай байж болно.");
        storageWarningShown = true;
      }
    }
  }

  function addActivity(type, label) {
    state.activity.unshift({ type, label, timestamp: Date.now() });
    state.activity = state.activity.slice(0, 24);
  }

  function countCompletedLessons() {
    return state.completedLessons.length;
  }

  function totalPoints() {
    return state.quizAttempts.reduce((sum, attempt) => sum + attempt.points, 0);
  }

  function bestScore() {
    return state.quizAttempts.reduce((best, attempt) => Math.max(best, Math.round(attempt.correct / attempt.total * 100)), 0);
  }

  function updateLearningProgress() {
    const count = countCompletedLessons();
    const label = `${count} / ${lessons.length}`;
    const percent = count / lessons.length * 100;
    document.getElementById("lesson-progress-label").textContent = label;
    document.getElementById("lesson-progress-bar").style.width = `${percent}%`;
    document.getElementById("dashboard-progress-label").textContent = label;
    document.getElementById("dashboard-progress-bar").style.width = `${percent}%`;
    document.getElementById("dashboard-progress-copy").textContent =
      count === lessons.length ? "Бүх хичээлийг дуусгалаа. Баяр хүргэе!" : `Үлдсэн ${lessons.length - count} хичээлээ үргэлжлүүлээрэй.`;
  }

  function renderLessonCategories() {
    const container = document.getElementById("lesson-categories");
    const categories = ["Бүгд", ...new Set(lessons.map(lesson => lesson.category))];
    container.replaceChildren(...categories.map(category => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `category-chip${(category === "Бүгд" ? !selectedCategory : selectedCategory === category) ? " active" : ""}`;
      button.textContent = category;
      button.setAttribute("aria-pressed", String(category === "Бүгд" ? !selectedCategory : selectedCategory === category));
      button.addEventListener("click", () => {
        selectedCategory = category === "Бүгд" ? "" : category;
        renderLessonCategories();
        renderLessonCards();
      });
      return button;
    }));
  }

  function renderLessonCards() {
    const query = document.getElementById("lesson-search").value.trim().toLocaleLowerCase("mn");
    const visible = lessons.filter(lesson =>
      (!selectedCategory || lesson.category === selectedCategory) &&
      (!query || `${lesson.title} ${lesson.summary} ${lesson.category}`.toLocaleLowerCase("mn").includes(query))
    );
    const container = document.getElementById("lesson-grid");
    if (!visible.length) {
      container.innerHTML = '<p class="empty-state">Хайлтад тохирох хичээл олдсонгүй. Өөр үг оруулж үзнэ үү.</p>';
      return;
    }
    container.replaceChildren(...visible.map((lesson, index) => {
      const card = document.createElement("article");
      card.className = "lesson-card";
      const complete = state.completedLessons.includes(lesson.id);
      card.innerHTML = `<div class="lesson-card-top"><span>${String(index + 1).padStart(2, "0")}</span><span>${lesson.duration}</span></div>
        <p class="eyebrow">${lesson.category}</p><h2>${lesson.title}</h2><p>${lesson.summary}</p>
        <div class="lesson-card-bottom"><span class="${complete ? "lesson-complete" : ""}">${complete ? "✓ ДУУССАН" : "СУДЛАХ"}</span><button type="button" aria-label="${lesson.title} хичээл нээх">↗</button></div>`;
      card.querySelector("button").addEventListener("click", () => openLesson(lesson.id));
      card.addEventListener("click", event => {
        if (event.target.closest("button")) return;
        openLesson(lesson.id);
      });
      card.tabIndex = 0;
      card.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openLesson(lesson.id);
        }
      });
      return card;
    }));
  }

  function lessonIllustration(lesson) {
    if (lesson.illustration === "atom") {
      return `<div class="lesson-diagram" role="img" aria-label="Цөмийн эргэн тойрон дахь электроны давхрааг хялбаршуулан үзүүлэв">
        <svg viewBox="0 0 360 180" aria-hidden="true"><ellipse cx="180" cy="90" rx="112" ry="57" fill="none" stroke="#51e4df" stroke-opacity=".55"/><ellipse cx="180" cy="90" rx="75" ry="37" fill="none" stroke="#51e4df" stroke-opacity=".45" transform="rotate(-35 180 90)"/><circle cx="180" cy="90" r="20" fill="#ff9b64"/><circle cx="180" cy="90" r="9" fill="#ffe0c5"/><circle cx="293" cy="90" r="5" fill="#51e4df"/><circle cx="218" cy="48" r="5" fill="#51e4df"/><text x="180" y="160" fill="#91a4ac" text-anchor="middle" font-size="11">ЦӨМ · ЭЛЕКТРОНЫ БҮРХҮҮЛ</text></svg>
      </div>`;
    }
    return "";
  }

  function openLesson(id) {
    const index = lessons.findIndex(lesson => lesson.id === id);
    if (index < 0) return;
    currentLessonId = id;
    const lesson = lessons[index];
    const reader = document.getElementById("lesson-reader");
    reader.innerHTML = `<div class="lesson-reader-top"><button type="button" class="text-button" data-lesson-back>← Бүх хичээл</button><span>${lesson.category} · ${lesson.duration}</span></div>
      ${lessonIllustration(lesson)}<h2>${lesson.title}</h2><div class="lesson-definition"><strong>ТОДОРХОЙЛОЛТ</strong><p>${lesson.definition}</p></div>
      ${lesson.sections.map(([heading, text]) => `<section><h3>${heading}</h3><p>${text}</p></section>`).join("")}
      <div class="lesson-example"><strong>ЖИШЭЭ</strong><p>${lesson.example}</p></div>
      <div class="lesson-note"><strong>САНАХ ЗҮЙЛ</strong><p>${lesson.note}</p></div>
      <div class="lesson-navigation"><button type="button" class="secondary-button" data-lesson-prev ${index === 0 ? "disabled" : ""}>← Өмнөх</button>
      <button type="button" class="primary-button" data-lesson-complete ${state.completedLessons.includes(id) ? "disabled" : ""}>${state.completedLessons.includes(id) ? "✓ Дууссан" : "Хичээлийг дуусгах"}</button>
      <button type="button" class="secondary-button" data-lesson-next ${index === lessons.length - 1 ? "disabled" : ""}>Дараах →</button></div>`;
    document.getElementById("lesson-grid").hidden = true;
    document.getElementById("lesson-categories").hidden = true;
    document.getElementById("lesson-search").parentElement.hidden = true;
    reader.hidden = false;
    reader.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function closeLesson() {
    document.getElementById("lesson-reader").hidden = true;
    document.getElementById("lesson-grid").hidden = false;
    document.getElementById("lesson-categories").hidden = false;
    document.getElementById("lesson-search").parentElement.hidden = false;
    currentLessonId = "";
  }

  function renderQuizChoices() {
    const container = document.getElementById("difficulty-options");
    const descriptions = {
      beginner: "Атомын суурь",
      intermediate: "Бүрхүүл ба ион",
      advanced: "Ойлголтоо хэрэглэх"
    };
    container.replaceChildren(...Object.entries(difficultyLabels).map(([level, label]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "difficulty-card";
      button.innerHTML = `<span>${label}</span><strong>${descriptions[level]}</strong><small>${questionBank.filter(item => item.level === level).length} АСУУЛТ</small>`;
      button.addEventListener("click", () => startQuiz(level));
      return button;
    }));
  }

  function shuffled(items) {
    const result = [...items];
    for (let index = result.length - 1; index > 0; index--) {
      const swap = Math.floor(Math.random() * (index + 1));
      [result[index], result[swap]] = [result[swap], result[index]];
    }
    return result;
  }

  function dailyQuestions() {
    const now = new Date();
    const date = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    let seed = 2166136261;
    for (const character of date) seed = Math.imul(seed ^ character.charCodeAt(0), 16777619);
    const random = () => {
      seed ^= seed << 13;
      seed ^= seed >>> 17;
      seed ^= seed << 5;
      return (seed >>> 0) / 4294967296;
    };
    const pool = [...questionBank];
    for (let index = pool.length - 1; index > 0; index--) {
      const swap = Math.floor(random() * (index + 1));
      [pool[index], pool[swap]] = [pool[swap], pool[index]];
    }
    return pool.slice(0, 10);
  }

  function startQuiz(mode) {
    const questions = mode === "daily"
      ? dailyQuestions()
      : shuffled(questionBank.filter(question => question.level === mode));
    quizSession = {
      mode,
      questions: questions.map(question => ({ ...question, choices: shuffled(question.options) })),
      index: 0,
      correct: 0,
      answered: false,
      finished: false,
      saved: false
    };
    document.getElementById("quiz-launcher").hidden = true;
    document.getElementById("quiz-history").hidden = true;
    document.getElementById("quiz-panel").hidden = false;
    renderQuizQuestion();
  }

  function renderQuizQuestion() {
    if (!quizSession || quizSession.finished) return renderQuizResult();
    const current = quizSession.questions[quizSession.index];
    const total = quizSession.questions.length;
    const progress = quizSession.index / total * 100;
    const questionNumber = quizSession.index + 1;
    const panel = document.getElementById("quiz-panel");
    panel.innerHTML = `<div class="quiz-progress-heading"><span>${quizSession.mode === "daily" ? "ӨНӨӨДРИЙН ДАДЛАГА" : `${difficultyLabels[quizSession.mode].toLocaleUpperCase("mn")} ТҮВШИН`}</span><strong>${questionNumber} / ${total}</strong></div>
      <div class="progress-track"><span style="width:${progress}%"></span></div><h2>${current.question}</h2>
      <div class="quiz-answers">${current.choices.map((choice, index) => `<button type="button" data-quiz-answer="${index}" ${quizSession.answered ? "disabled" : ""}> <span>${String.fromCharCode(65 + index)}</span>${choice}</button>`).join("")}</div>
      <div class="quiz-feedback" id="quiz-feedback" aria-live="polite"></div>
      <div class="quiz-footer"><span>Одоогийн оноо: <strong>${quizSession.correct * 10}</strong></span><button type="button" class="primary-button" id="quiz-next-button" ${quizSession.answered ? "" : "disabled"}>${questionNumber === total ? "Дүн харах" : "Дараагийн асуулт"} →</button></div>`;
  }

  function answerQuestion(choiceIndex) {
    if (!quizSession || quizSession.answered || quizSession.finished) return;
    const current = quizSession.questions[quizSession.index];
    const selectedAnswer = current.choices[choiceIndex];
    if (typeof selectedAnswer !== "string") return;
    quizSession.answered = true;
    const correct = selectedAnswer === current.answer;
    if (correct) quizSession.correct += 1;
    const buttons = [...document.querySelectorAll("[data-quiz-answer]")];
    buttons.forEach((button, index) => {
      button.disabled = true;
      const answer = current.choices[index];
      if (answer === current.answer) button.classList.add("answer-correct");
      else if (index === choiceIndex) button.classList.add("answer-wrong");
    });
    const feedback = document.getElementById("quiz-feedback");
    feedback.className = `quiz-feedback ${correct ? "correct" : "incorrect"}`;
    feedback.innerHTML = `<strong>${correct ? "Зөв хариуллаа!" : "Дахин суралцах боломж."}</strong><p>${current.explanation}</p>`;
    const score = document.querySelector(".quiz-footer span strong");
    score.textContent = String(quizSession.correct * 10);
    document.getElementById("quiz-next-button").disabled = false;
  }

  function finishQuiz() {
    if (!quizSession || quizSession.finished) return;
    quizSession.finished = true;
    if (!quizSession.saved) {
      const attempt = {
        mode: quizSession.mode,
        correct: quizSession.correct,
        total: quizSession.questions.length,
        points: quizSession.correct * 10,
        timestamp: Date.now()
      };
      state.quizAttempts.push(attempt);
      state.quizAttempts = state.quizAttempts.slice(-100);
      addActivity("quiz", `${quizSession.mode === "daily" ? "Өдөр тутмын дадлага" : `${difficultyLabels[quizSession.mode]} сорил`} — ${attempt.correct}/${attempt.total}`);
      quizSession.saved = true;
      saveState();
      updateDashboard();
    }
    renderQuizResult();
  }

  function renderQuizResult() {
    const session = quizSession;
    if (!session) return;
    const total = session.questions.length;
    const incorrect = total - session.correct;
    const percentage = Math.round(session.correct / total * 100);
    const panel = document.getElementById("quiz-panel");
    panel.innerHTML = `<div class="quiz-result"><span class="eyebrow">СОРИЛЫН ДҮН</span><strong class="quiz-result-percent">${percentage}%</strong><h2>${percentage >= 80 ? "Маш сайн ажиллалаа!" : "Суралцсаар байгаарай."}</h2>
      <div class="result-breakdown"><div><strong>${session.correct}</strong><span>ЗӨВ</span></div><div><strong>${incorrect}</strong><span>БУРУУ</span></div><div><strong>${session.correct * 10}</strong><span>ОНОО</span></div></div>
      <p>${total} асуултын ${session.correct}-д зөв хариуллаа.</p><button class="primary-button" id="quiz-restart-button" type="button">Дахин эхлэх ↻</button>
      <button class="text-button" id="quiz-choose-button" type="button">Түвшин сонгох</button></div>`;
    document.getElementById("quiz-history").hidden = false;
    renderQuizHistory();
    renderDashboard();
  }

  function renderQuizHistory() {
    const container = document.getElementById("quiz-history");
    const recent = [...state.quizAttempts].reverse().slice(0, 5);
    if (!recent.length) {
      container.innerHTML = '<div class="section-title"><h2>Сорилын түүх</h2></div><p class="empty-state">Сорил дуусгахад үр дүн энд хадгалагдана.</p>';
      return;
    }
    container.innerHTML = `<div class="section-title"><h2>Сорилын түүх</h2><span>СҮҮЛИЙН ${recent.length} ОРОЛДЛОГО</span></div>
      ${recent.map(attempt => `<div class="history-row"><span>${attempt.mode === "daily" ? "Өдөр тутмын дадлага" : `${difficultyLabels[attempt.mode]} түвшин`}</span><strong>${Math.round(attempt.correct / attempt.total * 100)}%</strong><small>${attempt.correct}/${attempt.total} зөв · ${new Date(attempt.timestamp).toLocaleDateString("mn-MN")}</small></div>`).join("")}`;
  }

  function openQuizLauncher() {
    quizSession = null;
    document.getElementById("quiz-launcher").hidden = false;
    document.getElementById("quiz-panel").hidden = true;
    document.getElementById("quiz-history").hidden = false;
    renderQuizHistory();
  }

  function renderFavoriteControls() {
    document.querySelectorAll("[data-favorite-number]").forEach(button => {
      const number = Number(button.dataset.favoriteNumber);
      const favorite = state.favorites.includes(number);
      const element = app.elements[number - 1];
      button.textContent = favorite ? "★" : "☆";
      button.classList.toggle("is-favorite", favorite);
      button.setAttribute("aria-pressed", String(favorite));
      button.setAttribute("aria-label", `${element.name} элементийг ${favorite ? "дуртайгаас хасах" : "дуртайд хадгалах"}`);
      button.title = favorite ? "Хадгалснаас хасах" : "Дуртайд хадгалах";
    });
    document.getElementById("favorite-count").textContent = String(state.favorites.length);
  }

  function renderSavedCategoryOptions() {
    const select = document.getElementById("saved-category");
    const current = select.value;
    const categories = [...new Set(state.favorites.map(number => app.elements[number - 1].category))];
    select.replaceChildren(new Option("Бүх бүлэг", ""), ...categories.map(category => new Option(app.categoryNames[category], category)));
    if (categories.includes(current)) select.value = current;
  }

  function renderSavedElements() {
    renderSavedCategoryOptions();
    const query = document.getElementById("saved-search").value.trim().toLocaleLowerCase("mn");
    const category = document.getElementById("saved-category").value;
    const saved = state.favorites.map(number => app.elements[number - 1]).filter(element =>
      (!category || element.category === category) &&
      (!query || `${element.name} ${element.symbol} ${element.number} ${app.categoryNames[element.category]}`.toLocaleLowerCase("mn").includes(query))
    );
    document.getElementById("saved-total").textContent = `${state.favorites.length} элемент`;
    const grid = document.getElementById("saved-grid");
    if (!state.favorites.length) {
      grid.innerHTML = '<div class="empty-state saved-empty"><strong>Одоогоор хадгалсан элемент алга.</strong><span>Үелэх системийн дуртай ☆ товчийг дарж энд нэмээрэй.</span><a href="#home">Үелэх систем рүү очих →</a></div>';
      return;
    }
    if (!saved.length) {
      grid.innerHTML = '<div class="empty-state saved-empty"><strong>Тохирох элемент олдсонгүй.</strong><span>Хайлт эсвэл бүлгийн сонголтоо өөрчилнө үү.</span></div>';
      return;
    }
    grid.replaceChildren(...saved.map(element => {
      const card = document.createElement("article");
      card.className = "saved-card";
      card.dataset.category = element.category;
      card.innerHTML = `<span class="saved-number">${element.number} · ${app.categoryNames[element.category]}</span><strong class="saved-symbol">${element.symbol}</strong><h2>${element.name}</h2>
        <div><button type="button" data-open-element="${element.number}">Дэлгэрэнгүй ↗</button><button type="button" class="saved-remove" data-favorite-number="${element.number}" aria-label="${element.name} хадгалснаас хасах">★</button></div>`;
      return card;
    }));
    renderFavoriteControls();
  }

  function toggleFavorite(number) {
    const index = state.favorites.indexOf(number);
    if (index >= 0) {
      state.favorites.splice(index, 1);
      notify(`${app.elements[number - 1].name} хадгалснаас хаслаа.`);
    } else {
      state.favorites.push(number);
      addActivity("favorite", `${app.elements[number - 1].name} (${app.elements[number - 1].symbol}) дуртайд хадгаллаа`);
      notify(`${app.elements[number - 1].name} дуртайд хадгаллаа.`);
    }
    saveState();
    renderFavoriteControls();
    renderSavedElements();
    renderDashboard();
  }

  function formatActivityTime(timestamp) {
    return new Date(timestamp).toLocaleString("mn-MN", { dateStyle: "short", timeStyle: "short" });
  }

  function escapeHtml(value) {
    return value.replace(/[&<>"']/g, character => htmlEscapes[character]);
  }

  function renderDashboard() {
    const stats = [
      ["ДУУССАН ХИЧЭЭЛ", countCompletedLessons(), `Нийт ${lessons.length} хичээл`],
      ["СОРИЛЫН ОРОЛДЛОГО", state.quizAttempts.length, "Дуусгасан сорил"],
      ["ШИЛДЭГ ҮР ДҮН", `${bestScore()}%`, "Хамгийн өндөр хувь"],
      ["ЦУГЛУУЛСАН ОНОО", totalPoints(), "Зөв хариултаар"],
      ["ДУРТАЙ ЭЛЕМЕНТ", state.favorites.length, "Хадгалсан сонголт"]
    ];
    document.getElementById("dashboard-stats").innerHTML = stats.map(([label, value, detail], index) =>
      `<article class="dashboard-stat"><span>0${index + 1} / ${label}</span><strong>${value}</strong><small>${detail}</small></article>`
    ).join("");
    updateLearningProgress();
    const activity = document.getElementById("activity-list");
    if (!state.activity.length) {
      activity.innerHTML = '<p class="empty-state">Хичээл дуусгах, сорил өгөх эсвэл элемент хадгалахад үйл ажиллагаа энд харагдана.</p>';
      return;
    }
    activity.innerHTML = state.activity.slice(0, 10).map(item =>
      `<div class="activity-row"><span class="activity-marker ${item.type}"></span><strong>${escapeHtml(item.label)}</strong><time>${formatActivityTime(item.timestamp)}</time></div>`
    ).join("");
  }

  function renderDashboardAndQuizHeader() {
    updateLearningProgress();
    document.getElementById("quiz-best-label").textContent = state.quizAttempts.length ? `${bestScore()}%` : "—";
    renderDashboard();
    renderQuizHistory();
  }

  function shellsForLab(protons, electrons) {
    if (protons > 0 && electrons === protons) return [...app.getShells(protons)];
    if (protons > 0 && electrons < protons) {
      const shells = [...app.getShells(protons)];
      let remove = protons - electrons;
      for (let index = shells.length - 1; index >= 0 && remove > 0; index--) {
        const amount = Math.min(shells[index], remove);
        shells[index] -= amount;
        remove -= amount;
      }
      return shells.filter(count => count > 0);
    }
    const shells = protons > 0 ? [...app.getShells(protons)] : [];
    let remaining = electrons - protons;
    if (protons === 0) remaining = electrons;
    if (remaining <= 0) return shells;
    if (!shells.length) shells.push(0);
    let level = shells.length - 1;
    while (remaining > 0) {
      const capacity = 2 * (level + 1) ** 2;
      const occupied = shells[level] || 0;
      const amount = Math.min(remaining, Math.max(0, capacity - occupied));
      if (amount > 0) {
        shells[level] = occupied + amount;
        remaining -= amount;
      } else {
        level += 1;
        shells[level] = 0;
      }
    }
    return shells;
  }

  function renderLab() {
    const { protons, neutrons, electrons } = labState;
    const element = isKnownElement(protons) ? app.elements[protons - 1] : null;
    const charge = protons - electrons;
    const shells = shellsForLab(protons, electrons);
    const mass = protons + neutrons;
    document.getElementById("lab-protons").textContent = String(protons);
    document.getElementById("lab-neutrons").textContent = String(neutrons);
    document.getElementById("lab-electrons").textContent = String(electrons);
    document.getElementById("lab-atomic-number").textContent = element ? String(protons) : "—";
    document.getElementById("lab-symbol").textContent = element ? element.symbol : "—";
    document.getElementById("lab-element-name").textContent = element ? element.name : "Элементгүй бөөм";
    const stateLabel = protons === 0 ? "Элементийн атом биш" : charge === 0 ? "Саармаг атом" : charge > 0 ? "Эерэг ион (катион)" : "Сөрөг ион (анион)";
    document.getElementById("lab-particle-state").textContent = stateLabel;
    document.getElementById("lab-mass").textContent = String(mass);
    const chargeLabel = charge > 0 ? `+${charge}` : charge < 0 ? `−${Math.abs(charge)}` : "0";
    document.getElementById("lab-charge").textContent = chargeLabel;
    document.getElementById("lab-shell-summary").textContent = shells.length ? shells.join(" — ") : "—";
    const bars = document.getElementById("lab-shell-bars");
    bars.replaceChildren(...shells.map((count, index) => {
      const bar = document.createElement("div");
      bar.className = "shell-bar";
      const capacity = index === 0 ? 2 : 2 * (index + 1) ** 2;
      bar.innerHTML = `<span style="width:${Math.min(100, count / capacity * 100)}%"></span><label><span>${["K", "L", "M", "N", "O", "P", "Q"][index] || index + 1}</span><span>${count}e⁻</span></label>`;
      return bar;
    }));
    const explanation = document.getElementById("lab-explanation");
    if (!element) {
      explanation.textContent = "Протонгүй тул атомын дугаар болон химийн элементийг тодорхойлох боломжгүй. Эерэг цэнэгтэй цөм байхгүй нөхцөлд электронуудыг тусад нь харуулж байна.";
    } else {
      const referenceNeutrons = app.massNumbers[protons - 1] - protons;
      const isotopeText = neutrons === referenceNeutrons
        ? "Нейтроны тоо нь хүснэгтэд жишээ болгон ашигласан изотоптой таарч байна."
        : "Нейтроны тоо өөр тул энэ нь өөр изотопын бүтэц байж болно; тогтвортой эсэхийг энэ загвар тогтоохгүй.";
      const chargeText = charge === 0
        ? "Протон, электроны тоо тэнцүү тул саармаг атом."
        : `Протон − электрон = ${protons} − ${electrons} = ${chargeLabel}; ${charge > 0 ? "эерэг катион" : "сөрөг анион"} үүссэн.`;
      explanation.textContent = `${protons} протон нь ${element.name} (${element.symbol}) элементийг тодорхойлно. Массын тоо ${protons} + ${neutrons} = ${mass}. ${chargeText} ${isotopeText}`;
    }
    document.querySelectorAll("[data-lab-change]").forEach(button => {
      const key = button.dataset.labChange;
      const delta = Number(button.dataset.delta);
      const limit = key === "neutrons" ? 300 : 118;
      button.disabled = delta < 0 ? labState[key] === 0 : labState[key] >= limit;
    });
    const selectedExample = document.getElementById("lab-examples");
    selectedExample.value = [1, 2, 6, 8, 11, 17].includes(protons) ? String(protons) : "";
    app.drawAtom(shells, document.getElementById("lab-atom-svg"), {
      element,
      protons,
      neutrons,
      electrons
    }, false);
  }

  function setLabFromElement(element) {
    const referenceMass = app.massNumbers[element.number - 1];
    labState = { protons: element.number, neutrons: referenceMass - element.number, electrons: element.number };
    labInitialized = true;
    renderLab();
  }

  function updateDashboard() {
    renderDashboardAndQuizHeader();
  }

  function renderView() {
    const hash = window.location.hash.slice(1);
    const view = hash.split("/")[0];
    const current = validViews.has(view) ? view : "home";
    document.querySelectorAll("[data-view]").forEach(section => {
      section.hidden = section.dataset.view !== current;
    });
    document.querySelectorAll("[data-view-link]").forEach(link => {
      if (link.dataset.viewLink === current) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
    if (current === "lab" && !labInitialized) setLabFromElement(app.selected);
    if (current === "learn") {
      updateLearningProgress();
      renderLessonCards();
    }
    if (current === "quiz") renderDashboardAndQuizHeader();
    if (current === "saved") renderSavedElements();
    if (current === "progress") renderDashboard();
    if (current === "learn" && hash.startsWith("learn/")) {
      const id = hash.slice("learn/".length);
      if (lessons.some(lesson => lesson.id === id)) openLesson(id);
    } else if (document.getElementById("lesson-reader").hidden === false) {
      closeLesson();
    }
  }

  function init() {
    state = loadState();
    renderLessonCategories();
    renderLessonCards();
    renderQuizChoices();
    renderFavoriteControls();
    renderSavedElements();
    renderDashboardAndQuizHeader();
    app.renderGrid();

    document.querySelectorAll("[data-view-link]").forEach(link => link.addEventListener("click", () => {
      if (link.dataset.viewLink === "learn" && currentLessonId) closeLesson();
    }));
    window.addEventListener("hashchange", renderView);
    window.addEventListener("atomlab:element-selected", event => {
      if (!labInitialized || !event.detail) return;
      setLabFromElement(event.detail);
    });
    renderView();

    document.getElementById("lesson-search").addEventListener("input", renderLessonCards);
    document.getElementById("lesson-reader").addEventListener("click", event => {
      const button = event.target.closest("button");
      if (!button) return;
      const index = lessons.findIndex(lesson => lesson.id === currentLessonId);
      if (button.hasAttribute("data-lesson-back")) {
        closeLesson();
        return;
      }
      if (button.hasAttribute("data-lesson-prev") && index > 0) openLesson(lessons[index - 1].id);
      if (button.hasAttribute("data-lesson-next") && index < lessons.length - 1) openLesson(lessons[index + 1].id);
      if (button.hasAttribute("data-lesson-complete") && !state.completedLessons.includes(currentLessonId)) {
        state.completedLessons.push(currentLessonId);
        addActivity("lesson", `${lessons[index].title} хичээл дуусгалаа`);
        saveState();
        updateDashboard();
        openLesson(currentLessonId);
        renderLessonCards();
        notify("Хичээл дуусгасныг хадгаллаа.");
      }
    });
    document.getElementById("daily-quiz-button").addEventListener("click", () => startQuiz("daily"));
    document.getElementById("quiz-panel").addEventListener("click", event => {
      const answer = event.target.closest("[data-quiz-answer]");
      if (answer) {
        answerQuestion(Number(answer.dataset.quizAnswer));
        return;
      }
      if (event.target.closest("#quiz-next-button")) {
        if (!quizSession || !quizSession.answered) return;
        if (quizSession.index + 1 === quizSession.questions.length) finishQuiz();
        else {
          quizSession.index += 1;
          quizSession.answered = false;
          renderQuizQuestion();
        }
      }
      if (event.target.closest("#quiz-restart-button") && quizSession) startQuiz(quizSession.mode);
      if (event.target.closest("#quiz-choose-button")) openQuizLauncher();
    });
    document.getElementById("saved-search").addEventListener("input", renderSavedElements);
    document.getElementById("saved-category").addEventListener("change", renderSavedElements);
    document.getElementById("saved-grid").addEventListener("click", event => {
      const button = event.target.closest("[data-open-element]");
      if (!button) return;
      const element = app.elements[Number(button.dataset.openElement) - 1];
      app.selectElement(element);
      window.location.hash = "home";
    });
    document.addEventListener("click", event => {
      const button = event.target.closest("[data-favorite-number]");
      if (!button) return;
      event.preventDefault();
      event.stopPropagation();
      toggleFavorite(Number(button.dataset.favoriteNumber));
    });
    document.getElementById("lab-examples").addEventListener("change", event => {
      const number = Number(event.target.value);
      if (!isKnownElement(number)) return;
      setLabFromElement(app.elements[number - 1]);
      notify(`${app.elements[number - 1].name} атомын жишээ ачааллаа.`);
    });
    document.getElementById("lab-view").addEventListener("click", event => {
      const button = event.target.closest("[data-lab-change]");
      if (!button || button.disabled) return;
      const key = button.dataset.labChange;
      const limit = key === "neutrons" ? 300 : 118;
      labState[key] = Math.max(0, Math.min(limit, labState[key] + Number(button.dataset.delta)));
      document.getElementById("lab-examples").value = "";
      renderLab();
    });
    document.getElementById("lab-reset-button").addEventListener("click", () => setLabFromElement(app.selected));
    document.getElementById("lab-clear-button").addEventListener("click", () => {
      labState = { protons: 0, neutrons: 0, electrons: 0 };
      labInitialized = true;
      document.getElementById("lab-examples").value = "";
      renderLab();
    });
    document.getElementById("reset-progress-button").addEventListener("click", () => {
      if (!window.confirm("Дуусгасан хичээл, сорилын түүх, оноо, сүүлийн үйл ажиллагааг шинэчлэх үү? Хадгалсан элементүүд үлдэнэ.")) return;
      state.completedLessons = [];
      state.quizAttempts = [];
      state.activity = [];
      saveState();
      updateDashboard();
      renderLessonCards();
      renderQuizHistory();
      notify("Суралцах ахицыг шинэчиллээ. Дуртай элементүүд хэвээр үлдсэн.");
    });
    document.addEventListener("keydown", event => {
      if (event.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
        const section = document.querySelector('[data-view="learn"]:not([hidden])');
        if (section && !document.getElementById("lesson-reader").hidden) return;
        if (section) {
          event.preventDefault();
          document.getElementById("lesson-search").focus();
        }
      }
    });
    window.AtomLabPlatform = Object.freeze({
      isFavorite: number => state.favorites.includes(number),
      toggleFavorite,
      refreshFavorites: renderFavoriteControls
    });
    renderFavoriteControls();
    if (storedDataInvalid) notify("Өмнөх хадгалсан өгөгдөл эвдэрсэн тул хоосон ахицаар эхэллээ. Шинэчлэл хийх хүртэл хуучин утгыг дарж бичихгүй.");
    else if (!storageAvailable) notify("Өмнө хадгалсан суралцах өгөгдөл уншигдсангүй. Шинэ өөрчлөлт хадгалагдахгүй.");
  }

  init();
})();
