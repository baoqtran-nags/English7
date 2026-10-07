import { GrammarQuestion } from '../types.ts';

export const CURATED_QUESTION_SETS: Record<string, { title: string; description: string; questions: GrammarQuestion[] }> = {
  set1: {
    title: "Đề Ôn Tập Số 1: Tổng Hợp 3 Thì Trọng Tâm Lớp 7",
    description: "15 câu cân bằng: Hiện tại đơn, Quá khứ đơn & Hiện tại tiếp diễn (khẳng định, phủ định, nghi vấn)",
    questions: [
      {
        id: 1,
        sentenceWithBlank: "She (not go) ______ to school yesterday because of the heavy rain.",
        verbPrompt: "not go",
        tense: "Past Simple",
        form: "Phủ định (-)",
        verbType: "Động từ thường",
        correctAnswers: ["didn't go", "did not go"],
        explanation: {
          signalWord: "'yesterday' (hôm qua) -> Dấu hiệu nhận biết thì Quá khứ đơn (Past Simple).",
          structure: "Chủ ngữ 'She' + Thể phủ định thì Quá khứ đơn: S + did not (didn't) + V-nguyên thể.",
          translation: "Hôm qua cô ấy đã không đi học vì trời mưa to."
        }
      },
      {
        id: 2,
        sentenceWithBlank: "(be) ______ you happy when you received the birthday gift last Sunday?",
        verbPrompt: "be",
        tense: "Past Simple",
        form: "Nghi vấn (?)",
        verbType: "Động từ to be",
        correctAnswers: ["Were", "were"],
        explanation: {
          signalWord: "'last Sunday' (Chủ nhật tuần trước) -> Dấu hiệu nhận biết thì Quá khứ đơn.",
          structure: "Câu hỏi với động từ 'to be' thì Quá khứ đơn: Was / Were + S + tính từ? Với chủ ngữ 'you', ta dùng 'Were'.",
          translation: "Bạn có vui khi nhận được món quà sinh nhật vào Chủ nhật tuần trước không?"
        }
      },
      {
        id: 3,
        sentenceWithBlank: "My father usually (drive) ______ to work, but this morning he walked.",
        verbPrompt: "drive",
        tense: "Present Simple",
        form: "Khẳng định (+)",
        verbType: "Động từ thường",
        correctAnswers: ["drives"],
        explanation: {
          signalWord: "'usually' (thường xuyên) -> Dấu hiệu nhận biết thì Hiện tại đơn (Present Simple) diễn tả thói quen.",
          structure: "Chủ ngữ ngôi thứ 3 số ít 'My father' (He) + Động từ thêm 's' -> 'drives'.",
          translation: "Bố tôi thường lái xe đi làm, nhưng sáng nay ông ấy đã đi bộ."
        }
      },
      {
        id: 4,
        sentenceWithBlank: "Nam (not play) ______ football with his friends every Sunday morning.",
        verbPrompt: "not play",
        tense: "Present Simple",
        form: "Phủ định (-)",
        verbType: "Động từ thường",
        correctAnswers: ["doesn't play", "does not play"],
        explanation: {
          signalWord: "'every Sunday morning' (mỗi sáng Chủ nhật) -> Thói quen lặp đi lặp lại ở thì Hiện tại đơn.",
          structure: "Chủ ngữ ngôi thứ 3 số ít 'Nam' (He) + phủ định hiện tại đơn: S + does not (doesn't) + V-nguyên thể.",
          translation: "Nam không chơi bóng đá cùng bạn bè vào mỗi sáng Chủ nhật."
        }
      },
      {
        id: 5,
        sentenceWithBlank: "They (be) ______ in London two years ago.",
        verbPrompt: "be",
        tense: "Past Simple",
        form: "Khẳng định (+)",
        verbType: "Động từ to be",
        correctAnswers: ["were"],
        explanation: {
          signalWord: "'two years ago' (hai năm trước) -> Dấu hiệu nhận biết thì Quá khứ đơn.",
          structure: "Chủ ngữ số nhiều 'They' đi với to be ở quá khứ đơn là 'were'.",
          translation: "Họ đã ở Luân Đôn cách đây hai năm."
        }
      },
      {
        id: 6,
        sentenceWithBlank: "Look! The school bus (come) ______.",
        verbPrompt: "come",
        tense: "Present Continuous",
        form: "Khẳng định (+)",
        verbType: "Động từ thường",
        correctAnswers: ["is coming"],
        explanation: {
          signalWord: "'Look!' (Nhìn kìa!) với dấu chấm than -> Dấu hiệu nhận biết thì Hiện tại tiếp diễn (hành động đang xảy ra trước mắt).",
          structure: "Chủ ngữ số ít 'The school bus' (It) + is + V-ing ('come' tận cùng là 'e', bỏ 'e' rồi thêm '-ing' -> 'is coming').",
          translation: "Nhìn kìa! Xe buýt trường học đang tới."
        }
      },
      {
        id: 7,
        sentenceWithBlank: "I (buy) ______ this English dictionary two weeks ago.",
        verbPrompt: "buy",
        tense: "Past Simple",
        form: "Khẳng định (+)",
        verbType: "Động từ thường",
        correctAnswers: ["bought"],
        explanation: {
          signalWord: "'two weeks ago' (hai tuần trước) -> Thì Quá khứ đơn.",
          structure: "'buy' là động từ bất quy tắc, dạng quá khứ (V2) của 'buy' là 'bought'.",
          translation: "Tôi đã mua cuốn từ điển tiếng Anh này hai tuần trước."
        }
      },
      {
        id: 8,
        sentenceWithBlank: "(do) ______ you like eating Vietnamese noodles?",
        verbPrompt: "do",
        tense: "Present Simple",
        form: "Nghi vấn (?)",
        verbType: "Động từ thường",
        correctAnswers: ["Do", "do"],
        explanation: {
          signalWord: "Câu hỏi về sở thích chung -> Thì Hiện tại đơn.",
          structure: "Trợ động từ 'Do' + chủ ngữ 'you' + V-nguyên thể: Do you like...?",
          translation: "Bạn có thích ăn phở/mì Việt Nam không?"
        }
      },
      {
        id: 9,
        sentenceWithBlank: "Be quiet! The baby (sleep) ______ in the bedroom.",
        verbPrompt: "sleep",
        tense: "Present Continuous",
        form: "Khẳng định (+)",
        verbType: "Động từ thường",
        correctAnswers: ["is sleeping"],
        explanation: {
          signalWord: "'Be quiet!' (Hãy giữ im lặng!) -> Dấu hiệu nhận biết thì Hiện tại tiếp diễn (Present Continuous).",
          structure: "Chủ ngữ ngôi thứ 3 số ít 'The baby' + is + V-ing -> 'is sleeping'.",
          translation: "Hãy giữ im lặng nào! Em bé đang ngủ trong phòng ngủ."
        }
      },
      {
        id: 10,
        sentenceWithBlank: "Tom and Jerry (not be) ______ at home yesterday afternoon.",
        verbPrompt: "not be",
        tense: "Past Simple",
        form: "Phủ định (-)",
        verbType: "Động từ to be",
        correctAnswers: ["weren't", "were not"],
        explanation: {
          signalWord: "'yesterday afternoon' (chiều hôm qua) -> Quá khứ đơn.",
          structure: "Chủ ngữ 2 người 'Tom and Jerry' (số nhiều) + to be phủ định quá khứ: were not (weren't).",
          translation: "Tom và Jerry đã không ở nhà vào chiều hôm qua."
        }
      },
      {
        id: 11,
        sentenceWithBlank: "Linh (not watch) ______ TV at the moment; she is doing her homework.",
        verbPrompt: "not watch",
        tense: "Present Continuous",
        form: "Phủ định (-)",
        verbType: "Động từ thường",
        correctAnswers: ["isn't watching", "is not watching"],
        explanation: {
          signalWord: "'at the moment' (ngay lúc này) -> Dấu hiệu nhận biết thì Hiện tại tiếp diễn.",
          structure: "Chủ ngữ 'Linh' (ngôi thứ 3 số ít) + is not (isn't) + V-ing -> 'isn't watching'.",
          translation: "Linh đang không xem TV vào lúc này; bạn ấy đang làm bài tập về nhà."
        }
      },
      {
        id: 12,
        sentenceWithBlank: "We (not see) ______ each other last weekend.",
        verbPrompt: "not see",
        tense: "Past Simple",
        form: "Phủ định (-)",
        verbType: "Động từ thường",
        correctAnswers: ["didn't see", "did not see"],
        explanation: {
          signalWord: "'last weekend' (cuối tuần trước) -> Thì Quá khứ đơn.",
          structure: "Thể phủ định quá khứ đơn với động từ thường: S + didn't + V-nguyên mẫu ('see').",
          translation: "Chúng tôi đã không gặp nhau vào cuối tuần trước."
        }
      },
      {
        id: 13,
        sentenceWithBlank: "Listen! Someone (knock) ______ on the front door.",
        verbPrompt: "knock",
        tense: "Present Continuous",
        form: "Khẳng định (+)",
        verbType: "Động từ thường",
        correctAnswers: ["is knocking"],
        explanation: {
          signalWord: "'Listen!' (Hãy lắng nghe kìa!) -> Dấu hiệu thì Hiện tại tiếp diễn.",
          structure: "Đại từ bất định 'Someone' (ngôi thứ 3 số ít) + is + V-ing -> 'is knocking'.",
          translation: "Hãy lắng nghe kìa! Ai đó đang gõ cửa trước."
        }
      },
      {
        id: 14,
        sentenceWithBlank: "Linh (write) ______ an email to her foreign pen pal last night.",
        verbPrompt: "write",
        tense: "Past Simple",
        form: "Khẳng định (+)",
        verbType: "Động từ thường",
        correctAnswers: ["wrote"],
        explanation: {
          signalWord: "'last night' (tối qua) -> Dấu hiệu nhận biết thì Quá khứ đơn.",
          structure: "'write' là động từ bất quy tắc, quá khứ (V2) của 'write' là 'wrote'.",
          translation: "Tối qua Linh đã viết một bức thư điện tử cho bạn qua thư người nước ngoài."
        }
      },
      {
        id: 15,
        sentenceWithBlank: "They (not live) ______ in a big city; they live in a peaceful village.",
        verbPrompt: "not live",
        tense: "Present Simple",
        form: "Phủ định (-)",
        verbType: "Động từ thường",
        correctAnswers: ["don't live", "do not live"],
        explanation: {
          signalWord: "Diễn tả thực tế cuộc sống hiện tại (vế sau dùng 'live') -> Dùng thì Hiện tại đơn.",
          structure: "Chủ ngữ số nhiều 'They' + phủ định hiện tại đơn: do not (don't) + V-nguyên thể.",
          translation: "Họ không sống ở thành phố lớn; họ sống ở một ngôi làng yên bình."
        }
      }
    ]
  },
  set2: {
    title: "Đề Ôn Tập Số 2: Hoạt Động Thường Nhật & Hiện Tượng Đang Diễn Ra",
    description: "Bộ 15 câu tích hợp Hiện tại đơn, Quá khứ đơn và Hiện tại tiếp diễn",
    questions: [
      {
        id: 1,
        sentenceWithBlank: "Yesterday, my brother (eat) ______ three bowls of noodles.",
        verbPrompt: "eat",
        tense: "Past Simple",
        form: "Khẳng định (+)",
        verbType: "Động từ thường",
        correctAnswers: ["ate"],
        explanation: {
          signalWord: "'Yesterday' (hôm qua) -> Thì Quá khứ đơn.",
          structure: "'eat' là động từ bất quy tắc, cột V2 là 'ate'.",
          translation: "Hôm qua anh trai tôi đã ăn hết ba bát mì."
        }
      },
      {
        id: 2,
        sentenceWithBlank: "Cats usually (catch) ______ mice at night.",
        verbPrompt: "catch",
        tense: "Present Simple",
        form: "Khẳng định (+)",
        verbType: "Động từ thường",
        correctAnswers: ["catch"],
        explanation: {
          signalWord: "'usually' (thường xuyên) + sự thật về tập tính -> Thì Hiện tại đơn.",
          structure: "Chủ ngữ số nhiều 'Cats' nên động từ giữ nguyên mẫu: 'catch'.",
          translation: "Mèo thường bắt chuột vào ban đêm."
        }
      },
      {
        id: 3,
        sentenceWithBlank: "Look! The children (swim) ______ in the swimming pool.",
        verbPrompt: "swim",
        tense: "Present Continuous",
        form: "Khẳng định (+)",
        verbType: "Động từ thường",
        correctAnswers: ["are swimming"],
        explanation: {
          signalWord: "'Look!' (Hãy nhìn kìa!) -> Dấu hiệu thì Hiện tại tiếp diễn.",
          structure: "Chủ ngữ số nhiều 'The children' + are + V-ing ('swim' có 1 nguyên âm kẹp giữa 2 phụ âm -> gấp đôi 'm' thành 'are swimming').",
          translation: "Nhìn kìa! Những đứa trẻ đang bơi trong hồ bơi."
        }
      },
      {
        id: 4,
        sentenceWithBlank: "(do) ______ your sister watch English cartoons on YouTube every evening?",
        verbPrompt: "do",
        tense: "Present Simple",
        form: "Nghi vấn (?)",
        verbType: "Động từ thường",
        correctAnswers: ["Does", "does"],
        explanation: {
          signalWord: "'every evening' (mỗi tối) -> Hiện tại đơn.",
          structure: "Chủ ngữ ngôi thứ 3 số ít 'your sister' -> Mượn trợ động từ 'Does'.",
          translation: "Em gái bạn có xem phim hoạt hình tiếng Anh trên YouTube mỗi tối không?"
        }
      },
      {
        id: 5,
        sentenceWithBlank: "My uncle (teach) ______ me how to swim two summers ago.",
        verbPrompt: "teach",
        tense: "Past Simple",
        form: "Khẳng định (+)",
        verbType: "Động từ thường",
        correctAnswers: ["taught"],
        explanation: {
          signalWord: "'two summers ago' (hai mùa hè trước) -> Quá khứ đơn.",
          structure: "Động từ bất quy tắc 'teach' chuyển sang V2 là 'taught'.",
          translation: "Chú tôi đã dạy tôi bơi vào hai mùa hè trước."
        }
      },
      {
        id: 6,
        sentenceWithBlank: "Hoa (not drink) ______ coffee right now; she is drinking fruit juice.",
        verbPrompt: "not drink",
        tense: "Present Continuous",
        form: "Phủ định (-)",
        verbType: "Động từ thường",
        correctAnswers: ["isn't drinking", "is not drinking"],
        explanation: {
          signalWord: "'right now' (ngay bây giờ) -> Dấu hiệu thì Hiện tại tiếp diễn.",
          structure: "Chủ ngữ 'Hoa' (ngôi 3 số ít) + is not (isn't) + V-ing -> 'isn't drinking'.",
          translation: "Ngay bây giờ Hoa đang không uống cà phê; bạn ấy đang uống nước ép hoa quả."
        }
      },
      {
        id: 7,
        sentenceWithBlank: "Where (be) ______ you at 8 PM last night?",
        verbPrompt: "be",
        tense: "Past Simple",
        form: "Nghi vấn (?)",
        verbType: "Động từ to be",
        correctAnswers: ["were"],
        explanation: {
          signalWord: "'last night' (tối qua) -> Quá khứ đơn.",
          structure: "Từ để hỏi 'Where' + were + you...?",
          translation: "Bạn đã ở đâu lúc 8 giờ tối qua?"
        }
      },
      {
        id: 8,
        sentenceWithBlank: "They (build) ______ a new sports center near our school last month.",
        verbPrompt: "build",
        tense: "Past Simple",
        form: "Khẳng định (+)",
        verbType: "Động từ thường",
        correctAnswers: ["built"],
        explanation: {
          signalWord: "'last month' (tháng trước) -> Quá khứ đơn.",
          structure: "'build' là động từ bất quy tắc, V2 là 'built'.",
          translation: "Họ đã xây một trung tâm thể thao mới gần trường chúng tôi vào tháng trước."
        }
      },
      {
        id: 9,
        sentenceWithBlank: "Birds (fly) ______ across the sky every morning.",
        verbPrompt: "fly",
        tense: "Present Simple",
        form: "Khẳng định (+)",
        verbType: "Động từ thường",
        correctAnswers: ["fly"],
        explanation: {
          signalWord: "'every morning' (mỗi buổi sáng) -> Thói quen, Hiện tại đơn.",
          structure: "Chủ ngữ số nhiều 'Birds' + động từ giữ nguyên mẫu 'fly'.",
          translation: "Những chú chim bay ngang bầu trời vào mỗi buổi sáng."
        }
      },
      {
        id: 10,
        sentenceWithBlank: "He (not have) ______ enough time to finish the math test yesterday.",
        verbPrompt: "not have",
        tense: "Past Simple",
        form: "Phủ định (-)",
        verbType: "Động từ thường",
        correctAnswers: ["didn't have", "did not have"],
        explanation: {
          signalWord: "'yesterday' (hôm qua) -> Quá khứ đơn.",
          structure: "Thể phủ định quá khứ đơn: S + didn't + V-nguyên mẫu ('have').",
          translation: "Cậu ấy đã không có đủ thời gian để hoàn thành bài kiểm tra toán ngày hôm qua."
        }
      },
      {
        id: 11,
        sentenceWithBlank: "Keep silent! The teacher (explain) ______ an important grammar rule.",
        verbPrompt: "explain",
        tense: "Present Continuous",
        form: "Khẳng định (+)",
        verbType: "Động từ thường",
        correctAnswers: ["is explaining"],
        explanation: {
          signalWord: "'Keep silent!' (Hãy trật tự nào!) -> Dấu hiệu thì Hiện tại tiếp diễn.",
          structure: "Chủ ngữ số ít 'The teacher' + is + V-ing -> 'is explaining'.",
          translation: "Hãy trật tự nào! Thầy giáo đang giảng giải một quy tắc ngữ pháp quan trọng."
        }
      },
      {
        id: 12,
        sentenceWithBlank: "Minh (find) ______ a 50,000 VND note on the school playground this morning.",
        verbPrompt: "find",
        tense: "Past Simple",
        form: "Khẳng định (+)",
        verbType: "Động từ thường",
        correctAnswers: ["found"],
        explanation: {
          signalWord: "'this morning' (hành động đã kết thúc trong quá khứ) -> Quá khứ đơn.",
          structure: "'find' có dạng V2 bất quy tắc là 'found'.",
          translation: "Minh đã nhặt được một tờ tiền 50.000 đồng trên sân trường sáng nay."
        }
      },
      {
        id: 13,
        sentenceWithBlank: "My parents (not be) ______ at work on Sundays.",
        verbPrompt: "not be",
        tense: "Present Simple",
        form: "Phủ định (-)",
        verbType: "Động từ to be",
        correctAnswers: ["aren't", "are not"],
        explanation: {
          signalWord: "'on Sundays' (vào các ngày Chủ nhật) -> Hiện tại đơn.",
          structure: "Chủ ngữ số nhiều 'My parents' + aren't.",
          translation: "Bố mẹ tôi không đi làm vào các ngày Chủ nhật."
        }
      },
      {
        id: 14,
        sentenceWithBlank: "(did) ______ you speak English with foreign tourists when you went to Hoi An?",
        verbPrompt: "did",
        tense: "Past Simple",
        form: "Nghi vấn (?)",
        verbType: "Động từ thường",
        correctAnswers: ["Did", "did"],
        explanation: {
          signalWord: "Vế sau có 'went' (quá khứ) -> Câu hỏi thì Quá khứ đơn.",
          structure: "Trợ động từ quá khứ đơn đứng đầu câu hỏi: Did + S + V-nguyên thể?",
          translation: "Bạn đã nói tiếng Anh với du khách nước ngoài khi đến Hội An phải không?"
        }
      },
      {
        id: 15,
        sentenceWithBlank: "Lan always (wear) ______ her school uniform from Monday to Friday.",
        verbPrompt: "wear",
        tense: "Present Simple",
        form: "Khẳng định (+)",
        verbType: "Động từ thường",
        correctAnswers: ["wears"],
        explanation: {
          signalWord: "'always' (luôn luôn) -> Thói quen, Hiện tại đơn.",
          structure: "Chủ ngữ ngôi thứ 3 số ít 'Lan' + động từ thêm 's' -> 'wears'.",
          translation: "Lan luôn mặc đồng phục học sinh từ thứ Hai đến thứ Sáu."
        }
      }
    ]
  },
  set3: {
    title: "Đề Ôn Tập Số 3: Chuyên Sâu Thì Hiện Tại Tiếp Diễn & Phân Biệt",
    description: "Bộ 15 câu trọng tâm nhận biết và chia thì Hiện tại tiếp diễn xen kẽ Hiện tại đơn và Quá khứ đơn",
    questions: [
      {
        id: 1,
        sentenceWithBlank: "Listen! The birds (sing) ______ in the garden.",
        verbPrompt: "sing",
        tense: "Present Continuous",
        form: "Khẳng định (+)",
        verbType: "Động từ thường",
        correctAnswers: ["are singing"],
        explanation: {
          signalWord: "'Listen!' (Hãy lắng nghe kìa!) -> Dấu hiệu nhận biết thì Hiện tại tiếp diễn.",
          structure: "Chủ ngữ số nhiều 'The birds' + are + V-ing -> 'are singing'.",
          translation: "Hãy lắng nghe kìa! Những chú chim đang hót trong vườn."
        }
      },
      {
        id: 2,
        sentenceWithBlank: "At present, my mother (cook) ______ dinner in the kitchen.",
        verbPrompt: "cook",
        tense: "Present Continuous",
        form: "Khẳng định (+)",
        verbType: "Động từ thường",
        correctAnswers: ["is cooking"],
        explanation: {
          signalWord: "'At present' (Hiện tại / Bây giờ) -> Dấu hiệu thì Hiện tại tiếp diễn.",
          structure: "Chủ ngữ ngôi thứ 3 số ít 'my mother' + is + V-ing -> 'is cooking'.",
          translation: "Hiện tại, mẹ tôi đang nấu bữa tối trong bếp."
        }
      },
      {
        id: 3,
        sentenceWithBlank: "They (not play) ______ badminton right now; they are studying for tomorrow's test.",
        verbPrompt: "not play",
        tense: "Present Continuous",
        form: "Phủ định (-)",
        verbType: "Động từ thường",
        correctAnswers: ["aren't playing", "are not playing"],
        explanation: {
          signalWord: "'right now' (ngay lúc này) -> Dấu hiệu thì Hiện tại tiếp diễn.",
          structure: "Chủ ngữ 'They' + are not (aren't) + V-ing -> 'aren't playing'.",
          translation: "Họ đang không chơi cầu lông ngay lúc này; họ đang học bài cho bài thi ngày mai."
        }
      },
      {
        id: 4,
        sentenceWithBlank: "Tom (break) ______ his pencil during math class yesterday morning.",
        verbPrompt: "break",
        tense: "Past Simple",
        form: "Khẳng định (+)",
        verbType: "Động từ thường",
        correctAnswers: ["broke"],
        explanation: {
          signalWord: "'yesterday morning' (sáng hôm qua) -> Thì Quá khứ đơn.",
          structure: "Động từ bất quy tắc 'break' chuyển sang quá khứ (V2) là 'broke'.",
          translation: "Tom đã làm gãy chiếc bút chì trong giờ toán sáng hôm qua."
        }
      },
      {
        id: 5,
        sentenceWithBlank: "My sister usually (read) ______ fairy tales before going to bed.",
        verbPrompt: "read",
        tense: "Present Simple",
        form: "Khẳng định (+)",
        verbType: "Động từ thường",
        correctAnswers: ["reads"],
        explanation: {
          signalWord: "'usually' (thường xuyên) -> Thói quen, Thì Hiện tại đơn.",
          structure: "Chủ ngữ số ít 'My sister' + động từ thêm 's' -> 'reads'.",
          translation: "Em gái tôi thường đọc truyện cổ tích trước khi đi ngủ."
        }
      },
      {
        id: 6,
        sentenceWithBlank: "Look! That boy (run) ______ after the school bus.",
        verbPrompt: "run",
        tense: "Present Continuous",
        form: "Khẳng định (+)",
        verbType: "Động từ thường",
        correctAnswers: ["is running"],
        explanation: {
          signalWord: "'Look!' (Nhìn kìa!) -> Dấu hiệu thì Hiện tại tiếp diễn.",
          structure: "Chủ ngữ số ít 'That boy' + is + V-ing ('run' có 1 nguyên âm 'u' kẹp giữa 2 phụ âm 'r' và 'n' -> gấp đôi phụ âm cuối thành 'running').",
          translation: "Nhìn kìa! Cậu bé kia đang chạy đuổi theo xe buýt trường học."
        }
      },
      {
        id: 7,
        sentenceWithBlank: "(be) ______ you at the English club meeting last Friday?",
        verbPrompt: "be",
        tense: "Past Simple",
        form: "Nghi vấn (?)",
        verbType: "Động từ to be",
        correctAnswers: ["Were", "were"],
        explanation: {
          signalWord: "'last Friday' (thứ Sáu tuần trước) -> Thì Quá khứ đơn.",
          structure: "Câu hỏi to be quá khứ với chủ ngữ 'you': Were you...?",
          translation: "Bạn có tham gia buổi sinh hoạt câu lạc bộ tiếng Anh vào thứ Sáu tuần trước không?"
        }
      },
      {
        id: 8,
        sentenceWithBlank: "Now we (learn) ______ how to pronounce the -ed endings in English.",
        verbPrompt: "learn",
        tense: "Present Continuous",
        form: "Khẳng định (+)",
        verbType: "Động từ thường",
        correctAnswers: ["are learning"],
        explanation: {
          signalWord: "'Now' (Bây giờ) -> Dấu hiệu thì Hiện tại tiếp diễn.",
          structure: "Chủ ngữ 'we' + are + V-ing -> 'are learning'.",
          translation: "Bây giờ chúng tôi đang học cách phát âm đuôi -ed trong tiếng Anh."
        }
      },
      {
        id: 9,
        sentenceWithBlank: "Liem (not go) ______ fishing with his grandfather last Sunday.",
        verbPrompt: "not go",
        tense: "Past Simple",
        form: "Phủ định (-)",
        verbType: "Động từ thường",
        correctAnswers: ["didn't go", "did not go"],
        explanation: {
          signalWord: "'last Sunday' (Chủ nhật trước) -> Quá khứ đơn.",
          structure: "Phủ định quá khứ đơn: S + didn't + V-nguyên mẫu ('go').",
          translation: "Liêm đã không đi câu cá cùng ông vào Chủ nhật tuần trước."
        }
      },
      {
        id: 10,
        sentenceWithBlank: "The earth (go) ______ around the sun.",
        verbPrompt: "go",
        tense: "Present Simple",
        form: "Khẳng định (+)",
        verbType: "Động từ thường",
        correctAnswers: ["goes"],
        explanation: {
          signalWord: "Chân lý hiển nhiên, sự thật vũ trụ -> Thì Hiện tại đơn.",
          structure: "Chủ ngữ số ít 'The earth' + động từ kết thúc bằng 'o' thêm '-es' -> 'goes'.",
          translation: "Trái đất quay quanh mặt trời."
        }
      },
      {
        id: 11,
        sentenceWithBlank: "Hurry up! Everyone (wait) ______ for you outside.",
        verbPrompt: "wait",
        tense: "Present Continuous",
        form: "Khẳng định (+)",
        verbType: "Động từ thường",
        correctAnswers: ["is waiting"],
        explanation: {
          signalWord: "'Hurry up!' (Nhanh lên nào!) -> Sự việc đang diễn ra ở hiện tại.",
          structure: "Đại từ bất định 'Everyone' chia như ngôi thứ 3 số ít + is + V-ing -> 'is waiting'.",
          translation: "Nhanh lên nào! Mọi người đang đợi bạn ở bên ngoài đấy."
        }
      },
      {
        id: 12,
        sentenceWithBlank: "We (win) ______ the school football championship last year.",
        verbPrompt: "win",
        tense: "Past Simple",
        form: "Khẳng định (+)",
        verbType: "Động từ thường",
        correctAnswers: ["won"],
        explanation: {
          signalWord: "'last year' (năm ngoái) -> Thì Quá khứ đơn.",
          structure: "'win' là động từ bất quy tắc, quá khứ V2 là 'won'.",
          translation: "Chúng tôi đã giành chức vô địch bóng đá toàn trường vào năm ngoái."
        }
      },
      {
        id: 13,
        sentenceWithBlank: "She (not like) ______ drinking milk tea; she prefers orange juice.",
        verbPrompt: "not like",
        tense: "Present Simple",
        form: "Phủ định (-)",
        verbType: "Động từ thường",
        correctAnswers: ["doesn't like", "does not like"],
        explanation: {
          signalWord: "Sở thích chung (động từ chỉ cảm xúc 'like' không dùng ở tiếp diễn) -> Thì Hiện tại đơn.",
          structure: "Chủ ngữ ngôi thứ 3 số ít 'She' + doesn't + V-nguyên thể -> 'doesn't like'.",
          translation: "Cô ấy không thích uống trà sữa; cô ấy thích nước cam hơn."
        }
      },
      {
        id: 14,
        sentenceWithBlank: "Where is Dad? - He (wash) ______ his motorbike in the yard right now.",
        verbPrompt: "wash",
        tense: "Present Continuous",
        form: "Khẳng định (+)",
        verbType: "Động từ thường",
        correctAnswers: ["is washing"],
        explanation: {
          signalWord: "'Where is Dad?' và 'right now' -> Hành động đang xảy ra tại thời điểm nói.",
          structure: "Chủ ngữ 'He' + is + V-ing -> 'is washing'.",
          translation: "Bố đâu rồi? - Bố đang rửa xe máy ở ngoài sân ngay lúc này."
        }
      },
      {
        id: 15,
        sentenceWithBlank: "Yesterday evening, we (have) ______ a warm dinner together at grandmother's house.",
        verbPrompt: "have",
        tense: "Past Simple",
        form: "Khẳng định (+)",
        verbType: "Động từ thường",
        correctAnswers: ["had"],
        explanation: {
          signalWord: "'Yesterday evening' (tối hôm qua) -> Thì Quá khứ đơn.",
          structure: "'have' là động từ bất quy tắc, V2 là 'had'.",
          translation: "Tối hôm qua, chúng tôi đã có một bữa tối ấm cúng cùng nhau ở nhà bà."
        }
      }
    ]
  }
};

export function getRandomSet(): GrammarQuestion[] {
  const sets = Object.values(CURATED_QUESTION_SETS);
  const selected = sets[Math.floor(Math.random() * sets.length)];
  return selected.questions;
}
