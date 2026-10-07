export interface IrregularVerb {
  stt: number;
  v1: string;
  v1Ipa: string;
  v2: string;
  v2Ipa: string;
  v3: string;
  v3Ipa: string;
  meaning: string;
  group: '1-20' | '21-40' | '41-60' | '61-80' | '81-100';
  pattern: 'A-A-A' | 'A-B-B' | 'A-B-A' | 'A-B-C' | 'A-A-B';
  example: {
    en: string;
    vi: string;
  };
}

export const IRREGULAR_VERBS_100: IrregularVerb[] = [
  {
    stt: 1,
    v1: "be",
    v1Ipa: "/biː/",
    v2: "was/were",
    v2Ipa: "/wɒz/ - /wɜː/",
    v3: "been",
    v3Ipa: "/biːn/",
    meaning: "thì, là, ở, bị",
    group: "1-20",
    pattern: "A-B-C",
    example: {
      en: "She was at school yesterday.",
      vi: "Hôm qua cô ấy đã ở trường."
    }
  },
  {
    stt: 2,
    v1: "beat",
    v1Ipa: "/biːt/",
    v2: "beat",
    v2Ipa: "/biːt/",
    v3: "beaten",
    v3Ipa: "/ˈbiːtn/",
    meaning: "đánh, đập, thắng",
    group: "1-20",
    pattern: "A-A-B", // categorized under A-B-C or A-A-B
    example: {
      en: "Our school team beat them last week.",
      vi: "Đội trường mình đã đánh bại họ tuần trước."
    }
  },
  {
    stt: 3,
    v1: "become",
    v1Ipa: "/bɪˈkʌm/",
    v2: "became",
    v2Ipa: "/bɪˈkeɪm/",
    v3: "become",
    v3Ipa: "/bɪˈkʌm/",
    meaning: "trở nên, trở thành",
    group: "1-20",
    pattern: "A-B-A",
    example: {
      en: "He became a famous singer.",
      vi: "Anh ấy đã trở thành một ca sĩ nổi tiếng."
    }
  },
  {
    stt: 4,
    v1: "begin",
    v1Ipa: "/bɪˈɡɪn/",
    v2: "began",
    v2Ipa: "/bɪˈɡæn/",
    v3: "begun",
    v3Ipa: "/bɪˈɡʌn/",
    meaning: "bắt đầu",
    group: "1-20",
    pattern: "A-B-C",
    example: {
      en: "The English lesson began at 8 AM.",
      vi: "Tiết học tiếng Anh đã bắt đầu lúc 8 giờ sáng."
    }
  },
  {
    stt: 5,
    v1: "bite",
    v1Ipa: "/baɪt/",
    v2: "bit",
    v2Ipa: "/bɪt/",
    v3: "bitten",
    v3Ipa: "/ˈbɪtn/",
    meaning: "cắn, ngoạm",
    group: "1-20",
    pattern: "A-B-C",
    example: {
      en: "The dog bit my old shoes.",
      vi: "Con chó đã cắn đôi giày cũ của tôi."
    }
  },
  {
    stt: 6,
    v1: "blow",
    v1Ipa: "/bləʊ/",
    v2: "blew",
    v2Ipa: "/bluː/",
    v3: "blown",
    v3Ipa: "/bləʊn/",
    meaning: "thổi",
    group: "1-20",
    pattern: "A-B-C",
    example: {
      en: "A strong wind blew away my hat.",
      vi: "Một cơn gió mạnh đã thổi bay chiếc mũ của tôi."
    }
  },
  {
    stt: 7,
    v1: "break",
    v1Ipa: "/breɪk/",
    v2: "broke",
    v2Ipa: "/brəʊk/",
    v3: "broken",
    v3Ipa: "/ˈbrəʊkən/",
    meaning: "làm vỡ, bẻ gãy",
    group: "1-20",
    pattern: "A-B-C",
    example: {
      en: "Tom accidentally broke the glass vase.",
      vi: "Tom vô tình làm vỡ bình hoa thủy tinh."
    }
  },
  {
    stt: 8,
    v1: "bring",
    v1Ipa: "/brɪŋ/",
    v2: "brought",
    v2Ipa: "/brɔːt/",
    v3: "brought",
    v3Ipa: "/brɔːt/",
    meaning: "mang lại, đem đến",
    group: "1-20",
    pattern: "A-B-B",
    example: {
      en: "She brought her notebook to class.",
      vi: "Cô ấy đã mang vở ghi đến lớp."
    }
  },
  {
    stt: 9,
    v1: "build",
    v1Ipa: "/bɪld/",
    v2: "built",
    v2Ipa: "/bɪlt/",
    v3: "built",
    v3Ipa: "/bɪlt/",
    meaning: "xây dựng",
    group: "1-20",
    pattern: "A-B-B",
    example: {
      en: "They built a new library last year.",
      vi: "Họ đã xây dựng một thư viện mới vào năm ngoái."
    }
  },
  {
    stt: 10,
    v1: "burn",
    v1Ipa: "/bɜːn/",
    v2: "burnt",
    v2Ipa: "/bɜːnt/",
    v3: "burnt",
    v3Ipa: "/bɜːnt/",
    meaning: "đốt, cháy",
    group: "1-20",
    pattern: "A-B-B",
    example: {
      en: "He burnt the campfire carefully.",
      vi: "Cậu ấy đã đốt lửa trại một cách cẩn thận."
    }
  },
  {
    stt: 11,
    v1: "buy",
    v1Ipa: "/baɪ/",
    v2: "bought",
    v2Ipa: "/bɔːt/",
    v3: "bought",
    v3Ipa: "/bɔːt/",
    meaning: "mua",
    group: "1-20",
    pattern: "A-B-B",
    example: {
      en: "My mother bought fresh apples yesterday.",
      vi: "Mẹ tôi đã mua táo tươi hôm qua."
    }
  },
  {
    stt: 12,
    v1: "catch",
    v1Ipa: "/kætʃ/",
    v2: "caught",
    v2Ipa: "/kɔːt/",
    v3: "caught",
    v3Ipa: "/kɔːt/",
    meaning: "bắt, tóm, đón (xe bus)",
    group: "1-20",
    pattern: "A-B-B",
    example: {
      en: "We caught the bus at 7:15 AM.",
      vi: "Chúng tôi đã đón xe buýt lúc 7:15 sáng."
    }
  },
  {
    stt: 13,
    v1: "choose",
    v1Ipa: "/tʃuːz/",
    v2: "chose",
    v2Ipa: "/tʃəʊz/",
    v3: "chosen",
    v3Ipa: "/ˈtʃəʊzn/",
    meaning: "chọn, lựa chọn",
    group: "1-20",
    pattern: "A-B-C",
    example: {
      en: "Linh chose a blue pen for the test.",
      vi: "Linh đã chọn chiếc bút màu xanh cho bài kiểm tra."
    }
  },
  {
    stt: 14,
    v1: "come",
    v1Ipa: "/kʌm/",
    v2: "came",
    v2Ipa: "/keɪm/",
    v3: "come",
    v3Ipa: "/kʌm/",
    meaning: "đến, tới",
    group: "1-20",
    pattern: "A-B-A",
    example: {
      en: "My grandparents came to visit us on Sunday.",
      vi: "Ông bà tôi đã đến thăm chúng tôi vào Chủ nhật."
    }
  },
  {
    stt: 15,
    v1: "cost",
    v1Ipa: "/kɒst/",
    v2: "cost",
    v2Ipa: "/kɒst/",
    v3: "cost",
    v3Ipa: "/kɒst/",
    meaning: "trị giá, có giá là",
    group: "1-20",
    pattern: "A-A-A",
    example: {
      en: "The comic book cost 30,000 VND.",
      vi: "Quyển truyện tranh có giá 30.000 đồng."
    }
  },
  {
    stt: 16,
    v1: "cut",
    v1Ipa: "/kʌt/",
    v2: "cut",
    v2Ipa: "/kʌt/",
    v3: "cut",
    v3Ipa: "/kʌt/",
    meaning: "cắt, thái",
    group: "1-20",
    pattern: "A-A-A",
    example: {
      en: "She cut the birthday cake for everyone.",
      vi: "Cô ấy đã cắt bánh sinh nhật cho mọi người."
    }
  },
  {
    stt: 17,
    v1: "dig",
    v1Ipa: "/dɪɡ/",
    v2: "dug",
    v2Ipa: "/dʌɡ/",
    v3: "dug",
    v3Ipa: "/dʌɡ/",
    meaning: "đào, xới",
    group: "1-20",
    pattern: "A-B-B",
    example: {
      en: "They dug a hole to plant a tree.",
      vi: "Họ đã đào một cái hố để trồng cây."
    }
  },
  {
    stt: 18,
    v1: "do",
    v1Ipa: "/duː/",
    v2: "did",
    v2Ipa: "/dɪd/",
    v3: "done",
    v3Ipa: "/dʌn/",
    meaning: "làm, thực hiện",
    group: "1-20",
    pattern: "A-B-C",
    example: {
      en: "Did you do your English homework last night?",
      vi: "Bạn đã làm bài tập tiếng Anh tối qua chưa?"
    }
  },
  {
    stt: 19,
    v1: "draw",
    v1Ipa: "/drɔː/",
    v2: "drew",
    v2Ipa: "/druː/",
    v3: "drawn",
    v3Ipa: "/drɔːn/",
    meaning: "vẽ, kéo",
    group: "1-20",
    pattern: "A-B-C",
    example: {
      en: "Mai drew a beautiful picture of Ha Long Bay.",
      vi: "Mai đã vẽ một bức tranh đẹp về Vịnh Hạ Long."
    }
  },
  {
    stt: 20,
    v1: "dream",
    v1Ipa: "/driːm/",
    v2: "dreamt",
    v2Ipa: "/dremt/",
    v3: "dreamt",
    v3Ipa: "/dremt/",
    meaning: "mơ, mộng thấy",
    group: "1-20",
    pattern: "A-B-B",
    example: {
      en: "I dreamt about flying in the sky.",
      vi: "Tôi đã mơ thấy mình bay lượn trên bầu trời."
    }
  },
  {
    stt: 21,
    v1: "drink",
    v1Ipa: "/drɪŋk/",
    v2: "drank",
    v2Ipa: "/dræŋk/",
    v3: "drunk",
    v3Ipa: "/drʌŋk/",
    meaning: "uống",
    group: "21-40",
    pattern: "A-B-C",
    example: {
      en: "He drank a glass of warm milk before bed.",
      vi: "Cậu ấy đã uống một ly sữa ấm trước khi ngủ."
    }
  },
  {
    stt: 22,
    v1: "drive",
    v1Ipa: "/draɪv/",
    v2: "drove",
    v2Ipa: "/drəʊv/",
    v3: "driven",
    v3Ipa: "/ˈdrɪvn/",
    meaning: "lái xe",
    group: "21-40",
    pattern: "A-B-C",
    example: {
      en: "Dad drove us to the countryside last weekend.",
      vi: "Bố đã lái xe đưa chúng tôi về quê cuối tuần trước."
    }
  },
  {
    stt: 23,
    v1: "eat",
    v1Ipa: "/iːt/",
    v2: "ate",
    v2Ipa: "/eɪt/",
    v3: "eaten",
    v3Ipa: "/ˈiːtn/",
    meaning: "ăn",
    group: "21-40",
    pattern: "A-B-C",
    example: {
      en: "We ate pho for breakfast this morning.",
      vi: "Chúng tôi đã ăn phở vào bữa sáng nay."
    }
  },
  {
    stt: 24,
    v1: "fall",
    v1Ipa: "/fɔːl/",
    v2: "fell",
    v2Ipa: "/fel/",
    v3: "fallen",
    v3Ipa: "/ˈfɔːlən/",
    meaning: "ngã, rơi",
    group: "21-40",
    pattern: "A-B-C",
    example: {
      en: "Yellow leaves fell from the trees in autumn.",
      vi: "Những chiếc lá vàng rơi từ trên cây vào mùa thu."
    }
  },
  {
    stt: 25,
    v1: "feed",
    v1Ipa: "/fiːd/",
    v2: "fed",
    v2Ipa: "/fed/",
    v3: "fed",
    v3Ipa: "/fed/",
    meaning: "cho ăn, nuôi",
    group: "21-40",
    pattern: "A-B-B",
    example: {
      en: "Hoa fed her pet cat after school.",
      vi: "Hoa đã cho chú mèo cưng ăn sau giờ học."
    }
  },
  {
    stt: 26,
    v1: "feel",
    v1Ipa: "/fiːl/",
    v2: "felt",
    v2Ipa: "/felt/",
    v3: "felt",
    v3Ipa: "/felt/",
    meaning: "cảm thấy",
    group: "21-40",
    pattern: "A-B-B",
    example: {
      en: "I felt so happy when I got a 10 in English.",
      vi: "Tôi cảm thấy rất vui khi đạt điểm 10 môn tiếng Anh."
    }
  },
  {
    stt: 27,
    v1: "fight",
    v1Ipa: "/faɪt/",
    v2: "fought",
    v2Ipa: "/fɔːt/",
    v3: "fought",
    v3Ipa: "/fɔːt/",
    meaning: "chiến đấu, đánh nhau",
    group: "21-40",
    pattern: "A-B-B",
    example: {
      en: "The soldiers fought bravely for freedom.",
      vi: "Các chiến sĩ đã chiến đấu dũng cảm vì tự do."
    }
  },
  {
    stt: 28,
    v1: "find",
    v1Ipa: "/faɪnd/",
    v2: "found",
    v2Ipa: "/faʊnd/",
    v3: "found",
    v3Ipa: "/faʊnd/",
    meaning: "tìm thấy, nhận thấy",
    group: "21-40",
    pattern: "A-B-B",
    example: {
      en: "An found his lost pencil under the desk.",
      vi: "An đã tìm thấy cây bút chì bị mất dưới gầm bàn."
    }
  },
  {
    stt: 29,
    v1: "fly",
    v1Ipa: "/flaɪ/",
    v2: "flew",
    v2Ipa: "/fluː/",
    v3: "flown",
    v3Ipa: "/fləʊn/",
    meaning: "bay",
    group: "21-40",
    pattern: "A-B-C",
    example: {
      en: "Birds flew south when winter approached.",
      vi: "Đàn chim đã bay về phương nam khi mùa đông tới."
    }
  },
  {
    stt: 30,
    v1: "forget",
    v1Ipa: "/fəˈɡet/",
    v2: "forgot",
    v2Ipa: "/fəˈɡɒt/",
    v3: "forgotten",
    v3Ipa: "/fəˈɡɒtn/",
    meaning: "quên",
    group: "21-40",
    pattern: "A-B-C",
    example: {
      en: "He forgot his umbrella so he got wet.",
      vi: "Cậu ấy đã quên ô nên bị ướt sũng."
    }
  },
  {
    stt: 31,
    v1: "forgive",
    v1Ipa: "/fəˈɡɪv/",
    v2: "forgave",
    v2Ipa: "/fəˈɡeɪv/",
    v3: "forgiven",
    v3Ipa: "/fəˈɡɪvn/",
    meaning: "tha thứ",
    group: "21-40",
    pattern: "A-B-C",
    example: {
      en: "The teacher forgave him for being late.",
      vi: "Cô giáo đã tha thứ cho cậu ấy vì đi học muộn."
    }
  },
  {
    stt: 32,
    v1: "freeze",
    v1Ipa: "/friːz/",
    v2: "froze",
    v2Ipa: "/frəʊz/",
    v3: "frozen",
    v3Ipa: "/ˈfrəʊzn/",
    meaning: "đóng băng, đông lạnh",
    group: "21-40",
    pattern: "A-B-C",
    example: {
      en: "Water froze into ice in the freezer.",
      vi: "Nước đã đông thành đá trong tủ lạnh."
    }
  },
  {
    stt: 33,
    v1: "get",
    v1Ipa: "/ɡet/",
    v2: "got",
    v2Ipa: "/ɡɒt/",
    v3: "got",
    v3Ipa: "/ɡɒt/",
    meaning: "được, nhận được, trở nên",
    group: "21-40",
    pattern: "A-B-B",
    example: {
      en: "She got good marks on her mid-term test.",
      vi: "Cô ấy đã đạt điểm cao trong kỳ thi giữa kỳ."
    }
  },
  {
    stt: 34,
    v1: "give",
    v1Ipa: "/ɡɪv/",
    v2: "gave",
    v2Ipa: "/ɡeɪv/",
    v3: "given",
    v3Ipa: "/ˈɡɪvn/",
    meaning: "cho, tặng",
    group: "21-40",
    pattern: "A-B-C",
    example: {
      en: "They gave me a nice present on my birthday.",
      vi: "Họ đã tặng tôi một món quà xinh xắn vào ngày sinh nhật."
    }
  },
  {
    stt: 35,
    v1: "go",
    v1Ipa: "/ɡəʊ/",
    v2: "went",
    v2Ipa: "/went/",
    v3: "gone",
    v3Ipa: "/ɡɒn/",
    meaning: "đi",
    group: "21-40",
    pattern: "A-B-C",
    example: {
      en: "We went camping in Da Lat last summer.",
      vi: "Chúng tôi đã đi cắm trại ở Đà Lạt mùa hè năm ngoái."
    }
  },
  {
    stt: 36,
    v1: "grow",
    v1Ipa: "/ɡrəʊ/",
    v2: "grew",
    v2Ipa: "/ɡruː/",
    v3: "grown",
    v3Ipa: "/ɡrəʊn/",
    meaning: "lớn lên, trồng (cây)",
    group: "21-40",
    pattern: "A-B-C",
    example: {
      en: "The sunflowers grew taller every week.",
      vi: "Những bông hoa hướng dương lớn nhanh mỗi tuần."
    }
  },
  {
    stt: 37,
    v1: "hang",
    v1Ipa: "/hæŋ/",
    v2: "hung",
    v2Ipa: "/hʌŋ/",
    v3: "hung",
    v3Ipa: "/hʌŋ/",
    meaning: "treo, móc",
    group: "21-40",
    pattern: "A-B-B",
    example: {
      en: "Nam hung the school bag on the wall.",
      vi: "Nam đã treo cặp sách lên tường."
    }
  },
  {
    stt: 38,
    v1: "have",
    v1Ipa: "/hæv/",
    v2: "had",
    v2Ipa: "/hæd/",
    v3: "had",
    v3Ipa: "/hæd/",
    meaning: "có, ăn, uống",
    group: "21-40",
    pattern: "A-B-B",
    example: {
      en: "We had a wonderful picnic yesterday.",
      vi: "Chúng tôi đã có một chuyến dã ngoại tuyệt vời hôm qua."
    }
  },
  {
    stt: 39,
    v1: "hear",
    v1Ipa: "/hɪə/",
    v2: "heard",
    v2Ipa: "/hɜːd/",
    v3: "heard",
    v3Ipa: "/hɜːd/",
    meaning: "nghe thấy",
    group: "21-40",
    pattern: "A-B-B",
    example: {
      en: "I heard the school bell ring loudly.",
      vi: "Tôi đã nghe thấy tiếng chuông trường reo to."
    }
  },
  {
    stt: 40,
    v1: "hide",
    v1Ipa: "/haɪd/",
    v2: "hid",
    v2Ipa: "/hɪd/",
    v3: "hidden",
    v3Ipa: "/ˈhɪdn/",
    meaning: "giấu, trốn",
    group: "21-40",
    pattern: "A-B-C",
    example: {
      en: "The kids hid behind the big tree.",
      vi: "Những đứa trẻ đã trốn sau cái cây to."
    }
  },
  {
    stt: 41,
    v1: "hit",
    v1Ipa: "/hɪt/",
    v2: "hit",
    v2Ipa: "/hɪt/",
    v3: "hit",
    v3Ipa: "/hɪt/",
    meaning: "đánh, đụng phải",
    group: "41-60",
    pattern: "A-A-A",
    example: {
      en: "The ball hit the goalpost.",
      vi: "Quả bóng đã đập trúng cột dọc khung thành."
    }
  },
  {
    stt: 42,
    v1: "hold",
    v1Ipa: "/həʊld/",
    v2: "held",
    v2Ipa: "/held/",
    v3: "held",
    v3Ipa: "/held/",
    meaning: "cầm, nắm, tổ chức",
    group: "41-60",
    pattern: "A-B-B",
    example: {
      en: "Our school held a sports festival last month.",
      vi: "Trường chúng tôi đã tổ chức hội thao vào tháng trước."
    }
  },
  {
    stt: 43,
    v1: "hurt",
    v1Ipa: "/hɜːt/",
    v2: "hurt",
    v2Ipa: "/hɜːt/",
    v3: "hurt",
    v3Ipa: "/hɜːt/",
    meaning: "làm đau, bị thương",
    group: "41-60",
    pattern: "A-A-A",
    example: {
      en: "He hurt his knee during the football match.",
      vi: "Cậu ấy bị đau đầu gối trong trận bóng đá."
    }
  },
  {
    stt: 44,
    v1: "keep",
    v1Ipa: "/kiːp/",
    v2: "kept",
    v2Ipa: "/kept/",
    v3: "kept",
    v3Ipa: "/kept/",
    meaning: "giữ, duy trì",
    group: "41-60",
    pattern: "A-B-B",
    example: {
      en: "She kept all her drawings in a folder.",
      vi: "Cô ấy đã giữ tất cả tranh vẽ trong một tập hồ sơ."
    }
  },
  {
    stt: 45,
    v1: "know",
    v1Ipa: "/nəʊ/",
    v2: "knew",
    v2Ipa: "/njuː/",
    v3: "known",
    v3Ipa: "/nəʊn/",
    meaning: "biết, nhận biết",
    group: "41-60",
    pattern: "A-B-C",
    example: {
      en: "Everyone knew the right answer to question 5.",
      vi: "Mọi người đều biết câu trả lời đúng cho câu số 5."
    }
  },
  {
    stt: 46,
    v1: "lay",
    v1Ipa: "/leɪ/",
    v2: "laid",
    v2Ipa: "/leɪd/",
    v3: "laid",
    v3Ipa: "/leɪd/",
    meaning: "đặt, để, đẻ (trứng)",
    group: "41-60",
    pattern: "A-B-B",
    example: {
      en: "He laid the books on the desk.",
      vi: "Cậu ấy đã đặt những cuốn sách lên bàn."
    }
  },
  {
    stt: 47,
    v1: "lead",
    v1Ipa: "/liːd/",
    v2: "led",
    v2Ipa: "/led/",
    v3: "led",
    v3Ipa: "/led/",
    meaning: "dẫn đường, lãnh đạo",
    group: "41-60",
    pattern: "A-B-B",
    example: {
      en: "The monitor led our class to victory.",
      vi: "Bạn lớp trưởng đã dẫn dắt lớp chúng tôi đến chiến thắng."
    }
  },
  {
    stt: 48,
    v1: "learn",
    v1Ipa: "/lɜːn/",
    v2: "learnt",
    v2Ipa: "/lɜːnt/",
    v3: "learnt",
    v3Ipa: "/lɜːnt/",
    meaning: "học, học tập",
    group: "41-60",
    pattern: "A-B-B",
    example: {
      en: "We learnt many new vocabulary words today.",
      vi: "Hôm nay chúng tôi đã học nhiều từ vựng mới."
    }
  },
  {
    stt: 49,
    v1: "leave",
    v1Ipa: "/liːv/",
    v2: "left",
    v2Ipa: "/left/",
    v3: "left",
    v3Ipa: "/left/",
    meaning: "rời đi, để lại",
    group: "41-60",
    pattern: "A-B-B",
    example: {
      en: "The train left the station at 6 PM.",
      vi: "Chuyến tàu đã rời ga lúc 6 giờ tối."
    }
  },
  {
    stt: 50,
    v1: "lend",
    v1Ipa: "/lend/",
    v2: "lent",
    v2Ipa: "/lent/",
    v3: "lent",
    v3Ipa: "/lent/",
    meaning: "cho mượn, cho vay",
    group: "41-60",
    pattern: "A-B-B",
    example: {
      en: "Lan lent me her ruler during math class.",
      vi: "Lan đã cho tôi mượn thước kẻ trong giờ toán."
    }
  },
  {
    stt: 51,
    v1: "let",
    v1Ipa: "/let/",
    v2: "let",
    v2Ipa: "/let/",
    v3: "let",
    v3Ipa: "/let/",
    meaning: "cho phép, để cho",
    group: "41-60",
    pattern: "A-A-A",
    example: {
      en: "Mom let us watch TV for an hour.",
      vi: "Mẹ đã cho phép chúng tôi xem TV trong một tiếng."
    }
  },
  {
    stt: 52,
    v1: "lie",
    v1Ipa: "/laɪ/",
    v2: "lay",
    v2Ipa: "/leɪ/",
    v3: "lain",
    v3Ipa: "/leɪn/",
    meaning: "nằm (nghỉ)",
    group: "41-60",
    pattern: "A-B-C",
    example: {
      en: "The puppy lay on the carpet and slept.",
      vi: "Chú cún con đã nằm trên thảm và ngủ."
    }
  },
  {
    stt: 53,
    v1: "light",
    v1Ipa: "/laɪt/",
    v2: "lit",
    v2Ipa: "/lɪt/",
    v3: "lit",
    v3Ipa: "/lɪt/",
    meaning: "thắp sáng, đốt",
    group: "41-60",
    pattern: "A-B-B",
    example: {
      en: "They lit candles on the birthday cake.",
      vi: "Họ đã thắp những ngọn nến trên bánh sinh nhật."
    }
  },
  {
    stt: 54,
    v1: "lose",
    v1Ipa: "/luːz/",
    v2: "lost",
    v2Ipa: "/lɒst/",
    v3: "lost",
    v3Ipa: "/lɒst/",
    meaning: "mất, thất lạc, thua",
    group: "41-60",
    pattern: "A-B-B",
    example: {
      en: "Minh lost his keys this morning.",
      vi: "Minh đã đánh mất chìa khóa sáng nay."
    }
  },
  {
    stt: 55,
    v1: "make",
    v1Ipa: "/meɪk/",
    v2: "made",
    v2Ipa: "/meɪd/",
    v3: "made",
    v3Ipa: "/meɪd/",
    meaning: "làm, chế tạo",
    group: "41-60",
    pattern: "A-B-B",
    example: {
      en: "My mother made a delicious chocolate cake.",
      vi: "Mẹ tôi đã làm một chiếc bánh sô-cô-la ngon tuyệt."
    }
  },
  {
    stt: 56,
    v1: "mean",
    v1Ipa: "/miːn/",
    v2: "meant",
    v2Ipa: "/ment/",
    v3: "meant",
    v3Ipa: "/ment/",
    meaning: "có nghĩa là",
    group: "41-60",
    pattern: "A-B-B",
    example: {
      en: "I didn't know what this English word meant.",
      vi: "Tôi đã không biết từ tiếng Anh này có nghĩa là gì."
    }
  },
  {
    stt: 57,
    v1: "meet",
    v1Ipa: "/miːt/",
    v2: "met",
    v2Ipa: "/met/",
    v3: "met",
    v3Ipa: "/met/",
    meaning: "gặp gỡ",
    group: "41-60",
    pattern: "A-B-B",
    example: {
      en: "I met my best friend at the park yesterday.",
      vi: "Tôi đã gặp bạn thân ở công viên hôm qua."
    }
  },
  {
    stt: 58,
    v1: "pay",
    v1Ipa: "/peɪ/",
    v2: "paid",
    v2Ipa: "/peɪd/",
    v3: "paid",
    v3Ipa: "/peɪd/",
    meaning: "trả tiền, thanh toán",
    group: "41-60",
    pattern: "A-B-B",
    example: {
      en: "Dad paid for the museum tickets.",
      vi: "Bố đã trả tiền vé vào viện bảo tàng."
    }
  },
  {
    stt: 59,
    v1: "put",
    v1Ipa: "/pʊt/",
    v2: "put",
    v2Ipa: "/pʊt/",
    v3: "put",
    v3Ipa: "/pʊt/",
    meaning: "đặt, để",
    group: "41-60",
    pattern: "A-A-A",
    example: {
      en: "She put her English book on the shelf.",
      vi: "Cô ấy đã để cuốn sách tiếng Anh lên kệ."
    }
  },
  {
    stt: 60,
    v1: "read",
    v1Ipa: "/riːd/",
    v2: "read",
    v2Ipa: "/red/",
    v3: "read",
    v3Ipa: "/red/",
    meaning: "đọc",
    group: "41-60",
    pattern: "A-A-A",
    example: {
      en: "He read an exciting adventure story last night.",
      vi: "Cậu ấy đã đọc một câu chuyện phiêu lưu kỳ thú tối qua."
    }
  },
  {
    stt: 61,
    v1: "ride",
    v1Ipa: "/raɪd/",
    v2: "rode",
    v2Ipa: "/rəʊd/",
    v3: "ridden",
    v3Ipa: "/ˈrɪdn/",
    meaning: "cưỡi, đi (xe đạp/xe máy)",
    group: "61-80",
    pattern: "A-B-C",
    example: {
      en: "Bao rode his bike to school every day.",
      vi: "Bảo đã đạp xe đến trường mỗi ngày."
    }
  },
  {
    stt: 62,
    v1: "ring",
    v1Ipa: "/rɪŋ/",
    v2: "rang",
    v2Ipa: "/ræŋ/",
    v3: "rung",
    v3Ipa: "/rʌŋ/",
    meaning: "rung chuông, reo",
    group: "61-80",
    pattern: "A-B-C",
    example: {
      en: "The telephone rang three times.",
      vi: "Điện thoại đã reo ba hồi."
    }
  },
  {
    stt: 63,
    v1: "rise",
    v1Ipa: "/raɪz/",
    v2: "rose",
    v2Ipa: "/rəʊz/",
    v3: "risen",
    v3Ipa: "/ˈrɪzn/",
    meaning: "mọc, dâng lên",
    group: "61-80",
    pattern: "A-B-C",
    example: {
      en: "The sun rose at 5:30 this morning.",
      vi: "Mặt trời đã mọc lúc 5:30 sáng nay."
    }
  },
  {
    stt: 64,
    v1: "run",
    v1Ipa: "/rʌn/",
    v2: "ran",
    v2Ipa: "/ræn/",
    v3: "run",
    v3Ipa: "/rʌn/",
    meaning: "chạy",
    group: "61-80",
    pattern: "A-B-A",
    example: {
      en: "They ran five kilometers around the lake.",
      vi: "Họ đã chạy năm cây số quanh hồ."
    }
  },
  {
    stt: 65,
    v1: "say",
    v1Ipa: "/seɪ/",
    v2: "said",
    v2Ipa: "/sed/",
    v3: "said",
    v3Ipa: "/sed/",
    meaning: "nói",
    group: "61-80",
    pattern: "A-B-B",
    example: {
      en: "The teacher said: 'Good job everyone!'",
      vi: "Cô giáo nói: 'Các em làm tốt lắm!'"
    }
  },
  {
    stt: 66,
    v1: "see",
    v1Ipa: "/siː/",
    v2: "saw",
    v2Ipa: "/sɔː/",
    v3: "seen",
    v3Ipa: "/siːn/",
    meaning: "nhìn thấy, trông thấy",
    group: "61-80",
    pattern: "A-B-C",
    example: {
      en: "We saw many dolphins in the sea.",
      vi: "Chúng tôi đã nhìn thấy rất nhiều cá heo dưới biển."
    }
  },
  {
    stt: 67,
    v1: "sell",
    v1Ipa: "/sel/",
    v2: "sold",
    v2Ipa: "/səʊld/",
    v3: "sold",
    v3Ipa: "/səʊld/",
    meaning: "bán",
    group: "61-80",
    pattern: "A-B-B",
    example: {
      en: "The farmer sold fresh vegetables at the market.",
      vi: "Bác nông dân đã bán rau tươi ở chợ."
    }
  },
  {
    stt: 68,
    v1: "send",
    v1Ipa: "/send/",
    v2: "sent",
    v2Ipa: "/sent/",
    v3: "sent",
    v3Ipa: "/sent/",
    meaning: "gửi đi",
    group: "61-80",
    pattern: "A-B-B",
    example: {
      en: "I sent an email to my English pen pal.",
      vi: "Tôi đã gửi một email cho người bạn qua thư người nước ngoài."
    }
  },
  {
    stt: 69,
    v1: "set",
    v1Ipa: "/set/",
    v2: "set",
    v2Ipa: "/set/",
    v3: "set",
    v3Ipa: "/set/",
    meaning: "đặt, thiết lập, lặn (mặt trời)",
    group: "61-80",
    pattern: "A-A-A",
    example: {
      en: "The sun set behind the distant hills.",
      vi: "Mặt trời đã lặn sau những ngọn đồi xa."
    }
  },
  {
    stt: 70,
    v1: "shake",
    v1Ipa: "/ʃeɪk/",
    v2: "shook",
    v2Ipa: "/ʃʊk/",
    v3: "shaken",
    v3Ipa: "/ˈʃeɪkən/",
    meaning: "rung, lắc, bắt tay",
    group: "61-80",
    pattern: "A-B-C",
    example: {
      en: "They shook hands after the competition.",
      vi: "Họ đã bắt tay nhau sau cuộc thi."
    }
  },
  {
    stt: 71,
    v1: "shine",
    v1Ipa: "/ʃaɪn/",
    v2: "shone",
    v2Ipa: "/ʃɒn/",
    v3: "shone",
    v3Ipa: "/ʃɒn/",
    meaning: "chiếu sáng, tỏa sáng",
    group: "61-80",
    pattern: "A-B-B",
    example: {
      en: "The bright moon shone all night long.",
      vi: "Vầng trăng sáng đã soi rọi suốt đêm dài."
    }
  },
  {
    stt: 72,
    v1: "shoot",
    v1Ipa: "/ʃuːt/",
    v2: "shot",
    v2Ipa: "/ʃɒt/",
    v3: "shot",
    v3Ipa: "/ʃɒt/",
    meaning: "bắn, sút (bóng)",
    group: "61-80",
    pattern: "A-B-B",
    example: {
      en: "Quang shot the ball into the top corner.",
      vi: "Quang đã sút bóng vào góc cao."
    }
  },
  {
    stt: 73,
    v1: "show",
    v1Ipa: "/ʃəʊ/",
    v2: "showed",
    v2Ipa: "/ʃəʊd/",
    v3: "shown",
    v3Ipa: "/ʃəʊn/",
    meaning: "chỉ ra, cho xem",
    group: "61-80",
    pattern: "A-B-C",
    example: {
      en: "She showed me her family photos.",
      vi: "Cô ấy đã cho tôi xem những bức ảnh gia đình."
    }
  },
  {
    stt: 74,
    v1: "shut",
    v1Ipa: "/ʃʌt/",
    v2: "shut",
    v2Ipa: "/ʃʌt/",
    v3: "shut",
    v3Ipa: "/ʃʌt/",
    meaning: "đóng lại, khép lại",
    group: "61-80",
    pattern: "A-A-A",
    example: {
      en: "Please shut the door when it rains.",
      vi: "Hãy đóng cửa lại khi trời mưa."
    }
  },
  {
    stt: 75,
    v1: "sing",
    v1Ipa: "/sɪŋ/",
    v2: "sang",
    v2Ipa: "/sæŋ/",
    v3: "sung",
    v3Ipa: "/sʌŋ/",
    meaning: "hát, ca hát",
    group: "61-80",
    pattern: "A-B-C",
    example: {
      en: "The choir sang traditional English songs.",
      vi: "Dàn hợp xướng đã hát những bài hát tiếng Anh truyền thống."
    }
  },
  {
    stt: 76,
    v1: "sit",
    v1Ipa: "/sɪt/",
    v2: "sat",
    v2Ipa: "/sæt/",
    v3: "sat",
    v3Ipa: "/sæt/",
    meaning: "ngồi",
    group: "61-80",
    pattern: "A-B-B",
    example: {
      en: "We sat under the shade of a banyan tree.",
      vi: "Chúng tôi đã ngồi dưới bóng cây đa."
    }
  },
  {
    stt: 77,
    v1: "sleep",
    v1Ipa: "/sliːp/",
    v2: "slept",
    v2Ipa: "/slept/",
    v3: "slept",
    v3Ipa: "/slept/",
    meaning: "ngủ",
    group: "61-80",
    pattern: "A-B-B",
    example: {
      en: "The baby slept soundly all night.",
      vi: "Em bé đã ngủ ngon lành suốt cả đêm."
    }
  },
  {
    stt: 78,
    v1: "smell",
    v1Ipa: "/smel/",
    v2: "smelt",
    v2Ipa: "/smelt/",
    v3: "smelt",
    v3Ipa: "/smelt/",
    meaning: "ngửi thấy, có mùi thơm",
    group: "61-80",
    pattern: "A-B-B",
    example: {
      en: "The soup smelt delicious.",
      vi: "Món súp có mùi thơm nức."
    }
  },
  {
    stt: 79,
    v1: "speak",
    v1Ipa: "/spiːk/",
    v2: "spoke",
    v2Ipa: "/spəʊk/",
    v3: "spoken",
    v3Ipa: "/ˈspəʊkən/",
    meaning: "nói (ngôn ngữ)",
    group: "61-80",
    pattern: "A-B-C",
    example: {
      en: "He spoke fluent English with the foreign teacher.",
      vi: "Cậu ấy đã nói tiếng Anh lưu loát với thầy giáo nước ngoài."
    }
  },
  {
    stt: 80,
    v1: "spend",
    v1Ipa: "/spend/",
    v2: "spent",
    v2Ipa: "/spent/",
    v3: "spent",
    v3Ipa: "/spent/",
    meaning: "tiêu xài, dành (thời gian)",
    group: "61-80",
    pattern: "A-B-B",
    example: {
      en: "We spent two hours doing homework.",
      vi: "Chúng tôi đã dành hai tiếng để làm bài tập về nhà."
    }
  },
  {
    stt: 81,
    v1: "stand",
    v1Ipa: "/stænd/",
    v2: "stood",
    v2Ipa: "/stʊd/",
    v3: "stood",
    v3Ipa: "/stʊd/",
    meaning: "đứng",
    group: "81-100",
    pattern: "A-B-B",
    example: {
      en: "Students stood up when the teacher entered.",
      vi: "Học sinh đã đứng dậy khi cô giáo bước vào lớp."
    }
  },
  {
    stt: 82,
    v1: "steal",
    v1Ipa: "/stiːl/",
    v2: "stole",
    v2Ipa: "/stəʊl/",
    v3: "stolen",
    v3Ipa: "/ˈstəʊlən/",
    meaning: "ăn cắp, trộm",
    group: "81-100",
    pattern: "A-B-C",
    example: {
      en: "Someone stole his bicycle outside the store.",
      vi: "Ai đó đã trộm mất xe đạp của cậu ấy ngoài cửa hàng."
    }
  },
  {
    stt: 83,
    v1: "stick",
    v1Ipa: "/stɪk/",
    v2: "stuck",
    v2Ipa: "/stʌk/",
    v3: "stuck",
    v3Ipa: "/stʌk/",
    meaning: "dán, dính, kẹt lại",
    group: "81-100",
    pattern: "A-B-B",
    example: {
      en: "She stuck the stamp on the envelope.",
      vi: "Cô ấy đã dán con tem lên phong bì."
    }
  },
  {
    stt: 84,
    v1: "strike",
    v1Ipa: "/straɪk/",
    v2: "struck",
    v2Ipa: "/strʌk/",
    v3: "struck",
    v3Ipa: "/strʌk/",
    meaning: "đánh, điểm (đồng hồ)",
    group: "81-100",
    pattern: "A-B-B",
    example: {
      en: "The clock struck twelve at midnight.",
      vi: "Đồng hồ đã điểm mười hai giờ đêm."
    }
  },
  {
    stt: 85,
    v1: "swim",
    v1Ipa: "/swɪm/",
    v2: "swam",
    v2Ipa: "/swæm/",
    v3: "swum",
    v3Ipa: "/swʌm/",
    meaning: "bơi lội",
    group: "81-100",
    pattern: "A-B-C",
    example: {
      en: "They swam across the swimming pool.",
      vi: "Họ đã bơi qua hồ bơi."
    }
  },
  {
    stt: 86,
    v1: "take",
    v1Ipa: "/teɪk/",
    v2: "took",
    v2Ipa: "/tʊk/",
    v3: "taken",
    v3Ipa: "/ˈteɪkən/",
    meaning: "cầm, lấy, đưa đi, uống (thuốc)",
    group: "81-100",
    pattern: "A-B-C",
    example: {
      en: "I took my umbrella because of the dark clouds.",
      vi: "Tôi đã mang theo ô vì thấy mây đen."
    }
  },
  {
    stt: 87,
    v1: "teach",
    v1Ipa: "/tiːtʃ/",
    v2: "taught",
    v2Ipa: "/tɔːt/",
    v3: "taught",
    v3Ipa: "/tɔːt/",
    meaning: "dạy dỗ, giảng dạy",
    group: "81-100",
    pattern: "A-B-B",
    example: {
      en: "Mr. Brown taught us English grammar last term.",
      vi: "Thầy Brown đã dạy chúng tôi ngữ pháp tiếng Anh kỳ trước."
    }
  },
  {
    stt: 88,
    v1: "tear",
    v1Ipa: "/teə/",
    v2: "tore",
    v2Ipa: "/tɔː/",
    v3: "torn",
    v3Ipa: "/tɔːn/",
    meaning: "xé, làm rách",
    group: "81-100",
    pattern: "A-B-C",
    example: {
      en: "He accidentally tore a page from his notebook.",
      vi: "Cậu ấy vô tình làm rách một trang vở."
    }
  },
  {
    stt: 89,
    v1: "tell",
    v1Ipa: "/tel/",
    v2: "told",
    v2Ipa: "/təʊld/",
    v3: "told",
    v3Ipa: "/təʊld/",
    meaning: "kể, bảo, nói với ai",
    group: "81-100",
    pattern: "A-B-B",
    example: {
      en: "Grandmother told us fairy tales every night.",
      vi: "Bà đã kể cho chúng tôi nghe chuyện cổ tích mỗi tối."
    }
  },
  {
    stt: 90,
    v1: "think",
    v1Ipa: "/θɪŋk/",
    v2: "thought",
    v2Ipa: "/θɔːt/",
    v3: "thought",
    v3Ipa: "/θɔːt/",
    meaning: "nghĩ, suy nghĩ",
    group: "81-100",
    pattern: "A-B-B",
    example: {
      en: "I thought the exam was quite interesting.",
      vi: "Tôi nghĩ bài thi khá thú vị."
    }
  },
  {
    stt: 91,
    v1: "throw",
    v1Ipa: "/θrəʊ/",
    v2: "threw",
    v2Ipa: "/θruː/",
    v3: "thrown",
    v3Ipa: "/θrəʊn/",
    meaning: "ném, quăng",
    group: "81-100",
    pattern: "A-B-C",
    example: {
      en: "Liem threw the ball to his teammate.",
      vi: "Liêm đã ném quả bóng cho đồng đội."
    }
  },
  {
    stt: 92,
    v1: "understand",
    v1Ipa: "/ˌʌndəˈstænd/",
    v2: "understood",
    v2Ipa: "/ˌʌndəˈstʊd/",
    v3: "understood",
    v3Ipa: "/ˌʌndəˈstʊd/",
    meaning: "hiểu, thấu hiểu",
    group: "81-100",
    pattern: "A-B-B",
    example: {
      en: "All students understood the math problem clearly.",
      vi: "Tất cả học sinh đều đã hiểu bài toán rõ ràng."
    }
  },
  {
    stt: 93,
    v1: "wake",
    v1Ipa: "/weɪk/",
    v2: "woke",
    v2Ipa: "/wəʊk/",
    v3: "woken",
    v3Ipa: "/ˈwəʊkən/",
    meaning: "thức giấc, đánh thức",
    group: "81-100",
    pattern: "A-B-C",
    example: {
      en: "I woke up at 6 AM to review for the test.",
      vi: "Tôi đã thức dậy lúc 6 giờ sáng để ôn bài kiểm tra."
    }
  },
  {
    stt: 94,
    v1: "wear",
    v1Ipa: "/weə/",
    v2: "wore",
    v2Ipa: "/wɔː/",
    v3: "worn",
    v3Ipa: "/wɔːn/",
    meaning: "mặc, mang, đeo",
    group: "81-100",
    pattern: "A-B-C",
    example: {
      en: "Students wore white shirts on Mondays.",
      vi: "Học sinh đã mặc áo sơ mi trắng vào các ngày thứ Hai."
    }
  },
  {
    stt: 95,
    v1: "win",
    v1Ipa: "/wɪn/",
    v2: "won",
    v2Ipa: "/wʌn/",
    v3: "won",
    v3Ipa: "/wʌn/",
    meaning: "chiến thắng, thắng",
    group: "81-100",
    pattern: "A-B-B",
    example: {
      en: "Our class won first prize in the singing contest.",
      vi: "Lớp chúng tôi đã giành giải nhất cuộc thi hát."
    }
  },
  {
    stt: 96,
    v1: "write",
    v1Ipa: "/raɪt/",
    v2: "wrote",
    v2Ipa: "/rəʊt/",
    v3: "written",
    v3Ipa: "/ˈrɪtn/",
    meaning: "viết",
    group: "81-100",
    pattern: "A-B-C",
    example: {
      en: "She wrote a letter to her grandmother.",
      vi: "Cô ấy đã viết một bức thư gửi bà của mình."
    }
  },
  {
    stt: 97,
    v1: "awake",
    v1Ipa: "/əˈweɪk/",
    v2: "awoke",
    v2Ipa: "/əˈwəʊk/",
    v3: "awoken",
    v3Ipa: "/əˈwəʊkən/",
    meaning: "thức dậy, đánh thức",
    group: "81-100",
    pattern: "A-B-C",
    example: {
      en: "The loud sound awoke the sleeping dog.",
      vi: "Âm thanh lớn đã đánh thức chú chó đang ngủ."
    }
  },
  {
    stt: 98,
    v1: "sweep",
    v1Ipa: "/swiːp/",
    v2: "swept",
    v2Ipa: "/swept/",
    v3: "swept",
    v3Ipa: "/swept/",
    meaning: "quét (nhà/sân)",
    group: "81-100",
    pattern: "A-B-B",
    example: {
      en: "Mai swept the classroom floor before leaving.",
      vi: "Mai đã quét sàn lớp học trước khi ra về."
    }
  },
  {
    stt: 99,
    v1: "weep",
    v1Ipa: "/wiːp/",
    v2: "wept",
    v2Ipa: "/wept/",
    v3: "wept",
    v3Ipa: "/wept/",
    meaning: "khóc than, rơi lệ",
    group: "81-100",
    pattern: "A-B-B",
    example: {
      en: "The little girl wept because she lost her doll.",
      vi: "Bé gái đã khóc vì làm mất búp bê."
    }
  },
  {
    stt: 100,
    v1: "spell",
    v1Ipa: "/spel/",
    v2: "spelt",
    v2Ipa: "/spelt/",
    v3: "spelt",
    v3Ipa: "/spelt/",
    meaning: "đánh vần",
    group: "81-100",
    pattern: "A-B-B",
    example: {
      en: "Can you spell your English name correctly?",
      vi: "Bạn có thể đánh vần đúng tên tiếng Anh của mình không?"
    }
  }
];
