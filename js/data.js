// js/data.js
window.probesData = [
  { 
    id: 'pioneer', 
    index: '01', 
    name: 'Pioneer 10', 
    year: '1972', 
    mission: 'Jupiter & Solar Escape', 
    description: '인류 최초로 위험한 소행성대를 통과하고 목성을 근접 탐사하여 외행성 탐사의 가능성을 증명한 기념비적인 우주선입니다. 이 탐사선은 태양계를 벗어나는 궤도에 진입한 최초의 인공물로서 외계 지적 생명체에게 보내는 메시지가 담긴 금속판을 품은 채, 2003년 마지막 교신을 끝으로 현재 황소자리의 알데바란을 향해 영원한 항해를 지속하고 있습니다.', 
    image: 'pic/pioneer_a.png', 
    specs: [{ label: 'STATUS', value: 'LOST SIGNAL' }, { label: 'LAUNCH', value: '1972.03.02' }, { label: 'LOC', value: '133.04 AU' }], 
    gallery: ['pic/pioneer_1.png', 'pic/pioneer_2.png', 'pic/pioneer_3.png', 'pic/pioneer_4.png', 'pic/pioneer_5.png'] 
  },
  { 
    id: 'viking', 
    index: '02', 
    name: 'Viking 1', 
    year: '1975', 
    mission: 'Mars Landing', 
    description: '붉은 행성, 화성에 착륙하여 생명체의 흔적을 찾은 최초의 성공적인 미션입니다. 화성 표면의 고해상도 컬러 사진을 지구로 전송하여 화성의 황량한 풍경을 인류에게 처음으로 생생하게 전달했습니다.', 
    image: 'pic/viking_a.png', 
    specs: [{ label: 'STATUS', value: 'RETIRED' }, { label: 'LAUNCH', value: '1975.08.20' }, { label: 'LOC', value: 'MARS SURFACE' }], 
    gallery: ['pic/viking_1.png', 'pic/viking_2.png', 'pic/viking_3.png', 'pic/viking_4.png', 'pic/viking_5.png'] 
  },
  { 
    id: 'voyager', 
    index: '03', 
    name: 'Voyager 1', 
    year: '1977', 
    mission: 'The Grand Tour', 
    description: '목성, 토성, 천왕성, 해왕성을 모두 방문하며 인류의 시야를 태양계 끝까지 확장했습니다. 현재 태양권계면(Heliopause)을 넘어 성간 우주(Interstellar Space)를 항해 중인 인류 역사상 가장 멀리 떨어진 물체입니다.', 
    image: 'pic/voyager_a.png', 
    specs: [{ label: 'STATUS', value: 'OPERATIONAL' }, { label: 'LAUNCH', value: '1977.09.05' }, { label: 'LOC', value: 'INTERSTELLAR' }], 
    gallery: ['pic/voyager_1.png', 'pic/voyager_2.png', 'pic/voyager_3.png', 'pic/voyager_4.png', 'pic/voyager_5.png'] 
  },
  { 
    id: 'galileo', 
    index: '04', 
    name: 'Galileo', 
    year: '1989', 
    mission: 'Jupiter Orbiter', 
    description: '목성 궤도에 진입하여 장기간 머물며 목성의 대기와 위성들을 정밀 관측했습니다. 특히 유로파의 얼음 표면 아래 거대한 바다가 존재할 가능성을 제시하여 외계 생명체 탐사의 새로운 지평을 열었습니다.', 
    image: 'pic/galileo_a.png', 
    specs: [{ label: 'STATUS', value: 'DEORBITED' }, { label: 'LAUNCH', value: '1989.10.18' }, { label: 'LOC', value: 'JUPITER ORBIT' }], 
    gallery: ['pic/galileo_1.png', 'pic/galileo_2.png', 'pic/galileo_3.png', 'pic/galileo_4.png', 'pic/galileo_5.png'] 
  },
  { 
    id: 'hubble', 
    index: '05', 
    name: 'Hubble Telescope', 
    year: '1990', 
    mission: 'Deep Space Optics', 
    description: '지구 대기의 간섭을 피해 우주 궤도에 올려진 대형 광학 망원경입니다. 지난 30년이 넘는 시간 동안 우주의 나이를 측정하고 블랙홀의 존재를 확인하는 등 천문학 교과서를 다시 쓰게 만든 인류의 눈입니다.', 
    image: 'pic/hubble_a.png', 
    specs: [{ label: 'STATUS', value: 'OPERATIONAL' }, { label: 'LAUNCH', value: '1990.04.24' }, { label: 'LOC', value: 'LOW EARTH ORBIT' }], 
    gallery: ['pic/hubble_1.png', 'pic/hubble_2.png', 'pic/hubble_3.png', 'pic/hubble_4.png', 'pic/hubble_5.png'] 
  },
  { 
    id: 'spirit', 
    index: '06', 
    name: 'Spirit', 
    year: '2003', 
    mission: 'Mars Rover', 
    description: '화성 탐사 로버(MER) 프로젝트의 첫 번째 주자로, 구세브 분화구(Gusev Crater)에 착륙하여 물의 작용으로 형성된 광물을 찾아냈습니다. 2009년 모래 구덩이에 빠져 이동이 불가능해질 때까지 끈질기게 임무를 수행했습니다.', 
    image: 'pic/spirit_a.png', 
    specs: [{ label: 'STATUS', value: 'RETIRED' }, { label: 'LAUNCH', value: '2003.06.10' }, { label: 'LOC', value: 'GUSEV CRATER' }], 
    gallery: ['pic/spirit_1.png', 'pic/spirit_2.png', 'pic/spirit_3.png', 'pic/spirit_4.png', 'pic/spirit_5.png'] 
  },
  { 
    id: 'opportunity', 
    index: '07', 
    name: 'Opportunity', 
    year: '2003', 
    mission: 'Mars Rover', 
    description: '스피릿의 쌍둥이 로버로, 당초 예상 수명인 90일을 훌쩍 넘겨 무려 15년 가까이 화성 표면을 누비며 마라톤 거리보다 긴 거리를 주행했습니다. 화성의 과거에 물이 존재했다는 결정적인 지질학적 증거들을 발견했습니다.', 
    image: 'pic/opportunity_a.png', 
    specs: [{ label: 'STATUS', value: 'RETIRED' }, { label: 'LAUNCH', value: '2003.07.07' }, { label: 'LOC', value: 'MERIDIANI PLANUM' }], 
    gallery: ['pic/opportunity_1.png', 'pic/opportunity_2.png', 'pic/opportunity_3.png', 'pic/opportunity_4.png', 'pic/opportunity_5.png'] 
  },
  { 
    id: 'horizons', 
    index: '08', 
    name: 'New Horizons', 
    year: '2006', 
    mission: 'Pluto & Kuiper Belt', 
    description: '태양계의 변방인 명왕성을 탐사하기 위해 발사된 가장 빠른 탐사선 중 하나입니다. 2015년 명왕성에 근접하여 하트 모양의 평원을 발견했고, 이후 카이퍼 벨트의 소행성 아로코스(Arrokoth)를 근접 촬영하는 데 성공했습니다.', 
    image: 'pic/horizons_a.png', 
    specs: [{ label: 'STATUS', value: 'HIBERNATION' }, { label: 'LAUNCH', value: '2006.01.19' }, { label: 'LOC', value: 'KUIPER BELT' }], 
    gallery: ['pic/horizons_1.png', 'pic/horizons_2.png', 'pic/horizons_3.png', 'pic/horizons_4.png', 'pic/horizons_5.png'] 
  },
  { 
    id: 'curiosity', 
    index: '09', 
    name: 'Curiosity', 
    year: '2011', 
    mission: 'Mars Science Lab', 
    description: '화성 게일 분화구에 착륙한 1톤급의 대형 로버입니다. 화성이 과거에 미생물이 살 수 있는 환경이었는지를 조사하며, 암석에 구멍을 뚫어 성분을 분석하는 등 움직이는 과학 실험실로서 현재까지 활발히 활동 중입니다.', 
    image: 'pic/curiosity_a.png', 
    specs: [{ label: 'STATUS', value: 'OPERATIONAL' }, { label: 'LAUNCH', value: '2011.11.26' }, { label: 'LOC', value: 'GALE CRATER' }], 
    gallery: ['pic/curiosity_1.png', 'pic/curiosity_2.png', 'pic/curiosity_3.png', 'pic/curiosity_4.png', 'pic/curiosity_5.png'] 
  },
  { 
    id: 'parker', 
    index: '10', 
    name: 'Parker Solar Probe', 
    year: '2018', 
    mission: 'Touch the Sun', 
    description: '인류 역사상 태양에 가장 가까이 접근하는 탐사선입니다. 섭씨 1,000도가 넘는 고열과 방사선을 견디며 태양의 대기인 코로나 속을 비행하여 태양풍의 가속 원리와 코로나 가열의 비밀을 풀고 있습니다.', 
    image: 'pic/parker_a.png', 
    specs: [{ label: 'STATUS', value: 'OPERATIONAL' }, { label: 'LAUNCH', value: '2018.08.12' }, { label: 'LOC', value: 'SUN CORONA' }], 
    gallery: ['pic/parker_1.png', 'pic/parker_2.png', 'pic/parker_3.png', 'pic/parker_4.png', 'pic/parker_5.png'] 
  },
  { 
    id: 'perseverance', 
    index: '11', 
    name: 'Perseverance', 
    year: '2020', 
    mission: 'Mars 2020', 
    description: '큐리오시티를 기반으로 성능을 대폭 향상시킨 최신형 로버입니다. 고대 삼각주 지역인 예제로 분화구에서 미생물의 흔적을 찾고 있으며, 미래에 지구로 가져올 화성 토양 샘플을 채취하여 보관하는 중요한 임무를 수행 중입니다.', 
    image: 'pic/perseverance_a.png', 
    specs: [{ label: 'STATUS', value: 'OPERATIONAL' }, { label: 'LAUNCH', value: '2020.07.30' }, { label: 'LOC', value: 'JEZERO CRATER' }], 
    gallery: ['pic/perseverance_1.png', 'pic/perseverance_2.png', 'pic/perseverance_3.png', 'pic/perseverance_4.png', 'pic/perseverance_5.png'] 
  },
  { 
    id: 'jameswebb', 
    index: '12', 
    name: 'James Webb', 
    year: '2021', 
    mission: 'Infrared Astronomy', 
    description: '허블 우주 망원경의 뒤를 잇는 차세대 적외선 망원경입니다. 지구에서 약 150만 km 떨어진 라그랑주 점(L2)에 위치하여, 우주 탄생 초기의 빛과 외계 행성의 대기 성분을 분석하며 우주의 기원을 탐구하고 있습니다.', 
    image: 'pic/james_a.png', 
    specs: [{ label: 'STATUS', value: 'OPERATIONAL' }, { label: 'LAUNCH', value: '2021.12.25' }, { label: 'LOC', value: 'L2 POINT' }], 
    gallery: ['pic/james_1.png', 'pic/james_2.png', 'pic/james_3.png', 'pic/james_4.png', 'pic/james_5.png'] 
  },
  { 
    id: 'europa', 
    index: '13', 
    name: 'Europa Clipper', 
    year: '2024', 
    mission: 'Ocean World Explorer', 
    description: '목성의 위성 유로파를 정밀 탐사하기 위해 설계된 최신 탐사선입니다. 유로파의 두꺼운 얼음 껍질 아래 존재하는 지하 바다의 특성을 파악하고, 생명체가 서식할 수 있는 환경인지를 조사하기 위해 먼 여정을 떠났습니다.', 
    image: 'pic/europa_a.png', 
    specs: [{ label: 'STATUS', value: 'EN ROUTE' }, { label: 'LAUNCH', value: '2024.10.14' }, { label: 'LOC', value: 'EUROPA' }], 
    gallery: ['pic/europa_1.png', 'pic/europa_2.png', 'pic/europa_3.png', 'pic/europa_4.png', 'pic/europa_5.png'] 
  }
];