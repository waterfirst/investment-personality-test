import React, { useState } from 'react';
import './InvestmentPersonalityTest.css';

const InvestmentPersonalityTest = () => {
  const [currentStep, setCurrentStep] = useState('intro');
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  // 테스트 시작하기
  const startTest = () => {
    setCurrentStep('question1');
  };

  // 답변 저장하기
  const saveAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
    
    // 다음 질문으로 이동 또는 결과 계산
    const questionNumber = parseInt(questionId.replace('question', ''));
    if (questionNumber < 10) {
      setCurrentStep(`question${questionNumber + 1}`);
    } else {
      calculateResult();
    }
  };

  // 결과 계산하기
  const calculateResult = () => {
    // 여기서는 간단한 알고리즘으로 결과를 계산합니다
    // 실제로는 더 복잡한 분석이 필요할 수 있습니다
    let scores = {
      'turtle': 0, // 안정 수호자
      'owl': 0,    // 균형 노련가
      'fox': 0,    // 가치 발굴가
      'bee': 0,    // 배당 소득가
      'dolphin': 0, // 트렌드 서퍼
      'eagle': 0   // 미래 선구자
    };
    
    // 응답에 따라 점수 계산
    if (answers.question1 === 'a') scores.turtle += 2;
    if (answers.question1 === 'b') scores.owl += 2;
    if (answers.question1 === 'c') scores.bee += 2;
    if (answers.question1 === 'd') scores.dolphin += 2;
    
    if (answers.question2 === 'a') scores.fox += 2;
    if (answers.question2 === 'b') scores.owl += 2;
    if (answers.question2 === 'c') scores.eagle += 2;
    
    if (answers.question3 === 'a') scores.turtle += 2;
    if (answers.question3 === 'b') scores.bee += 2;
    if (answers.question3 === 'c') scores.eagle += 2;
    if (answers.question3 === 'd') scores.dolphin += 2;
    
    if (answers.question4 === 'a') scores.turtle += 2;
    if (answers.question4 === 'b') scores.fox += 2;
    if (answers.question4 === 'c') scores.dolphin += 2;
    if (answers.question4 === 'd') scores.owl += 2;
    
    if (answers.question5 === 'a') scores.turtle += 2;
    if (answers.question5 === 'b') scores.owl += 2;
    if (answers.question5 === 'c') scores.bee += 2;
    if (answers.question5 === 'd') scores.eagle += 2;
    
    // 추가 질문들에 대한 점수 계산
    if (answers.question6 === 'a') scores.turtle += 2;
    if (answers.question6 === 'b') scores.owl += 2;
    if (answers.question6 === 'c') scores.bee += 2;
    if (answers.question6 === 'd') scores.fox += 2;
    
    if (answers.question7 === 'a') scores.turtle += 2;
    if (answers.question7 === 'b') scores.owl += 2;
    if (answers.question7 === 'c') scores.fox += 2;
    if (answers.question7 === 'd') scores.eagle += 2;
    
    if (answers.question8 === 'a') scores.turtle += 2;
    if (answers.question8 === 'b') scores.fox += 2;
    if (answers.question8 === 'c') scores.bee += 2;
    if (answers.question8 === 'd') scores.dolphin += 2;
    
    if (answers.question9 === 'a') scores.turtle += 2;
    if (answers.question9 === 'b') scores.owl += 2;
    if (answers.question9 === 'c') scores.fox += 2;
    if (answers.question9 === 'd') scores.dolphin += 2;
    
    if (answers.question10 === 'a') scores.fox += 2;
    if (answers.question10 === 'b') scores.owl += 2;
    if (answers.question10 === 'c') scores.bee += 2;
    if (answers.question10 === 'd') scores.dolphin += 2;

    // 최고 점수 찾기
    let highestScore = 0;
    let personalityType = '';
    
    Object.entries(scores).forEach(([type, score]) => {
      if (score > highestScore) {
        highestScore = score;
        personalityType = type;
      }
    });
    
    // 결과 설정
    setResult(personalityType);
    setCurrentStep('result');
  };

  // 포트폴리오 차트 컴포넌트
  const PortfolioChart = ({ portfolio }) => {
    const colors = {
      cash: '#4299E1', // 파란색
      bonds: '#48BB78', // 초록색
      stocks: '#F6AD55', // 주황색
      alternatives: '#9F7AEA' // 보라색
    };
    
    const segments = [
      { id: 'cash', label: '현금', percentage: portfolio.cash },
      { id: 'bonds', label: '채권', percentage: portfolio.bonds },
      { id: 'stocks', label: '주식', percentage: portfolio.stocks },
      { id: 'alternatives', label: '대체투자', percentage: portfolio.alternatives }
    ];
    
    return (
      <div className="portfolio-chart">
        <h3>추천 포트폴리오 배분</h3>
        <div className="chart-container">
          <div className="pie-chart-container">
            <div className="pie-chart">
              {segments.map((segment, index) => {
                const cumulativePercentage = segments
                  .slice(0, index)
                  .reduce((sum, s) => sum + s.percentage, 0);
                
                return (
                  <div
                    key={segment.id}
                    className="chart-segment"
                    style={{
                      backgroundColor: colors[segment.id],
                      clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos((cumulativePercentage + segment.percentage) / 100 * 2 * Math.PI)}% ${50 + 50 * Math.sin((cumulativePercentage + segment.percentage) / 100 * 2 * Math.PI)}%, ${50 + 50 * Math.cos(cumulativePercentage / 100 * 2 * Math.PI)}% ${50 + 50 * Math.sin(cumulativePercentage / 100 * 2 * Math.PI)}%)`
                    }}
                  />
                );
              })}
            </div>
          </div>
          <div className="chart-legend">
            <ul>
              {segments.map(segment => (
                <li key={segment.id} className="legend-item">
                  <span 
                    className="color-box" 
                    style={{ backgroundColor: colors[segment.id] }}
                  ></span>
                  <span>{segment.label}: {segment.percentage}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  // 인트로 화면
  const renderIntro = () => (
    <div className="intro-container">
      <h1>나의 투자 성향 테스트</h1>
      <p>
        재미있는 질문을 통해 당신의 투자 성향을 알아보세요. 
        나와 어울리는 투자 캐릭터는 무엇일까요?
      </p>
      <button 
        onClick={startTest}
        className="primary-button"
      >
        테스트 시작하기
      </button>
    </div>
  );

  // 질문 렌더링 함수
  const renderQuestion = (questionId) => {
    let questionContent;
    
    switch(questionId) {
      case 'question1':
        questionContent = {
          question: "집에서 TV 리모컨을 잃어버렸을 때, 당신은...",
          options: [
            { id: 'a', text: "체계적으로 한 곳씩 찾아본다" },
            { id: 'b', text: "가장 있을 법한 곳부터 확인한다" },
            { id: 'c', text: "가족들에게 도움을 요청한다" },
            { id: 'd', text: "스마트폰 앱으로 대체한다" }
          ]
        };
        break;
      case 'question2':
        questionContent = {
          question: "1988년 올림픽과 2018년 올림픽 중 더 기억에 남는 것은?",
          options: [
            { id: 'a', text: "1988년, 그때의 감동이 더 크다" },
            { id: 'b', text: "둘 다 각자의 의미가 있다" },
            { id: 'c', text: "2018년, 새로운 스타들이 인상적이었다" }
          ]
        };
        break;
      case 'question3':
        questionContent = {
          question: "갑자기 5천만원이 생겼다면?",
          options: [
            { id: 'a', text: "안전하게 저축한다" },
            { id: 'b', text: "배당주에 투자해 정기적 수입을 만든다" },
            { id: 'c', text: "유망 스타트업이나 성장주에 투자한다" },
            { id: 'd', text: "현재 시장 흐름을 보고 결정한다" }
          ]
        };
        break;
      case 'question4':
        questionContent = {
          question: "작년에 친구의 추천으로 투자하지 않은 주식이 3배 올랐을 때 당신의 반응은?",
          options: [
            { id: 'a', text: "다행이다, 잘못되었으면 큰일날 뻔했다" },
            { id: 'b', text: "아쉽지만, 내 투자원칙에 맞지 않았으니 어쩔 수 없다" },
            { id: 'c', text: "다음 기회를 찾아봐야겠다" },
            { id: 'd', text: "일부만이라도 투자해볼걸" }
          ]
        };
        break;
      case 'question5':
        questionContent = {
          question: "은퇴 후 가장 걱정되는 것은?",
          options: [
            { id: 'a', text: "원금 손실 가능성" },
            { id: 'b', text: "인플레이션으로 인한 구매력 감소" },
            { id: 'c', text: "정기적인 생활비 확보" },
            { id: 'd', text: "새로운 기회를 놓치는 것" }
          ]
        };
        break;
      // 추가 질문들
      case 'question6':
        questionContent = {
          question: "주식 시장이 급락했을 때 당신의 첫 반응은?",
          options: [
            { id: 'a', text: "빨리 현금화하여 손실을 최소화한다" },
            { id: 'b', text: "장기 투자 관점에서 관망한다" },
            { id: 'c', text: "배당률이 높아진 우량주를 찾아본다" },
            { id: 'd', text: "추가 매수 기회로 삼는다" }
          ]
        };
        break;
      case 'question7':
        questionContent = {
          question: "자녀/손주에게 투자 조언을 한다면?",
          options: [
            { id: 'a', text: "안전한 자산으로 기초를 다지라고 조언한다" },
            { id: 'b', text: "다양한 자산에 분산 투자하라고 조언한다" },
            { id: 'c', text: "본인이 관심있는 산업을 깊이 연구하라고 한다" },
            { id: 'd', text: "새로운 기술과 트렌드를 놓치지 말라고 한다" }
          ]
        };
        break;
      case 'question8':
        questionContent = {
          question: "가장 관심있게 보는 경제 뉴스는?",
          options: [
            { id: 'a', text: "금리 및 국가 경제 지표" },
            { id: 'b', text: "유망 산업 및 기업 분석" },
            { id: 'c', text: "배당 정책 및 기업 실적" },
            { id: 'd', text: "글로벌 시장 트렌드" }
          ]
        };
        break;
      case 'question9':
        questionContent = {
          question: "여행 계획을 세울 때 당신은?",
          options: [
            { id: 'a', text: "안전하고 검증된 여행지를 선호한다" },
            { id: 'b', text: "다양한 경험을 할 수 있는 균형 잡힌 일정을 짠다" },
            { id: 'c', text: "비용 대비 가치가 높은 옵션을 찾는다" },
            { id: 'd', text: "새롭고 트렌디한 여행지를 발굴한다" }
          ]
        };
        break;
      case 'question10':
        questionContent = {
          question: "투자 관련 정보를 얻는 주요 경로는?",
          options: [
            { id: 'a', text: "전통적인 경제 신문과 전문가 리포트" },
            { id: 'b', text: "다양한 채널의 정보를 종합적으로 분석" },
            { id: 'c', text: "투자 커뮤니티와 지인들의 조언" },
            { id: 'd', text: "소셜미디어와 최신 트렌드 정보" }
          ]
        };
        break;
      default:
        questionContent = {
          question: "오류가 발생했습니다",
          options: []
        };
    }
    
    return (
      <div className="question-container">
        <div className="question-progress">
          <span className="progress-badge">
            질문 {questionId.replace('question', '')} / 10
          </span>
        </div>
        
        <h2>{questionContent.question}</h2>
        
        <div className="options-container">
          {questionContent.options.map(option => (
            <button
              key={option.id}
              className="option-button"
              onClick={() => saveAnswer(questionId, option.id)}
            >
              <span className="option-prefix">{option.id.toUpperCase()}.</span> {option.text}
            </button>
          ))}
        </div>
      </div>
    );
  };

  // 결과 화면 렌더링
  const renderResult = () => {
    const personalities = {
      'turtle': {
        name: '안정 수호자 (거북이)',
        description: '당신은 안정을 최우선으로 여기는 투자자입니다. 천천히 가더라도 확실한 길을 선호하며, 원금 보존을 중요시합니다.',
        investment: '국채, 우량 회사채, 예금, 블루칩 주식',
        slogan: '천천히, 그러나 확실하게',
        strengths: [
          '리스크 관리에 탁월함',
          '감정적 투자 결정을 하지 않음',
          '장기적인 안목으로 투자'
        ],
        weaknesses: [
          '인플레이션에 취약할 수 있음',
          '성장 기회를 놓칠 수 있음',
          '과도한 보수성이 수익률을 제한할 수 있음'
        ],
        portfolio: {
          cash: 20,
          bonds: 50,
          stocks: 25,
          alternatives: 5
        },
        recommendations: [
          '물가연동채권(TIPS)을 고려해 인플레이션 위험 대비',
          '우량 배당주로 안정적 수익 추구',
          '정기예금 사다리 전략으로 유동성 확보'
        ]
      },
      'owl': {
        name: '균형 노련가 (올빼미)',
        description: '넓은 시야와 지혜를 바탕으로 균형 잡힌 포트폴리오를 구성하는 투자자입니다. 위험과 수익의 적절한 균형을 추구합니다.',
        investment: '중위험-중수익 혼합형 자산 배분',
        slogan: '지혜로운 눈으로 균형을 찾다',
        strengths: [
          '분산투자로 리스크 관리',
          '시장 변화에 유연하게 대응',
          '장기적으로 안정적인 수익 창출'
        ],
        weaknesses: [
          '뚜렷한 전문 분야가 부족할 수 있음',
          '급격한 시장 기회에 대응이 느릴 수 있음',
          '과도한 분산으로 수익률 희석 가능성'
        ],
        portfolio: {
          cash: 10,
          bonds: 35,
          stocks: 45,
          alternatives: 10
        },
        recommendations: [
          '자산배분형 ETF를 활용한 효율적 분산투자',
          '정기적인 리밸런싱으로 위험 관리',
          '글로벌 자산 분산으로 국가 리스크 헤지'
        ]
      },
      'fox': {
        name: '가치 발굴가 (여우)',
        description: '날카로운 통찰력으로 저평가된 가치를 찾아내는 투자자입니다. 본질적 가치에 주목하며 장기적인 가치 상승을 기다립니다.',
        investment: '가치주, 배당주, 우량 중소형주',
        slogan: '숨겨진 가치를 발견하는 안목',
        strengths: [
          '기업의 본질적 가치 분석에 능함',
          '시장 과열을 피하는 냉정함',
          '장기적으로 시장 평균 이상의 수익 가능성'
        ],
        weaknesses: [
          '가치가 재평가되기까지 오랜 시간 소요될 수 있음',
          '성장 트렌드와 기술 혁신을 과소평가할 수 있음',
          '단기적으로 인기 종목보다 수익률이 낮을 수 있음'
        ],
        portfolio: {
          cash: 15,
          bonds: 20,
          stocks: 60,
          alternatives: 5
        },
        recommendations: [
          'PER, PBR 등 가치지표 활용한 종목 선정',
          '경기 사이클에 덜 민감한 가치주 발굴',
          '배당 성장주에 투자하여 복리효과 극대화'
        ]
      },
      'bee': {
        name: '배당 소득가 (꿀벌)',
        description: '꾸준한 현금흐름 창출에 집중하는 투자자입니다. 정기적인 수입을 통해 안정적인 자산 성장을 추구합니다.',
        investment: '고배당주, 리츠(REITs), 배당형 ETF',
        slogan: '매일 모이는 작은 꿀방울',
        strengths: [
          '안정적인 현금 흐름 창출',
          '시장 변동성에 덜 민감',
          '복리 효과를 통한 장기 자산 증식'
        ],
        weaknesses: [
          '인플레이션 상황에서 실질 수익률 하락 가능성',
          '자본 이득 기회 제한적',
          '세금 효율성 측면에서 불리할 수 있음'
        ],
        portfolio: {
          cash: 15,
          bonds: 30,
          stocks: 45,
          alternatives: 10
        },
        recommendations: [
          '배당성장주 중심 포트폴리오 구성',
          '배당금 재투자로 복리효과 극대화',
          '리츠(REITs)를 통한 부동산 배당 수익 확보'
        ]
      },
      'dolphin': {
        name: '트렌드 서퍼 (돌고래)',
        description: '시장의 흐름을 타고 민첩하게 움직이는 투자자입니다. 변화하는 트렌드를 감지하고 적절히 대응합니다.',
        investment: '성장주, 모멘텀 ETF, 신기술 관련주',
        slogan: '물결을 읽고 타는 지혜',
        strengths: [
          '시장 트렌드 변화에 빠른 적응력',
          '단기적 수익 기회 포착 능력',
          '새로운 투자 아이디어에 개방적'
        ],
        weaknesses: [
          '잦은 매매로 인한 비용 증가 가능성',
          '감정에 휘둘린 의사결정 위험',
          '장기적 가치보다 단기 흐름에 집중'
        ],
        portfolio: {
          cash: 15,
          bonds: 15,
          stocks: 60,
          alternatives: 10
        },
        recommendations: [
          '기술적 분석 지표를 활용한 매매 타이밍 포착',
          '섹터 로테이션 전략으로 성장 분야 투자',
          '손절 규칙을 명확히 설정하여 리스크 관리'
        ]
      },
      'eagle': {
        name: '미래 선구자 (독수리)',
        description: '높은 시야에서 미래의 성장 동력을 발견하는 투자자입니다. 혁신과 변화를 포착하여 장기적 성장에 베팅합니다.',
        investment: '혁신 기술주, 신흥 산업, 성장 잠재력 높은 섹터',
        slogan: '멀리 보는 안목, 미래에 투자',
        strengths: [
          '혁신 기술과 미래 트렌드에 대한 통찰력',
          '장기적 안목으로 큰 수익 가능성',
          '메가 트렌드를 파악하는 능력'
        ],
        weaknesses: [
          '단기적 변동성이 클 수 있음',
          '검증되지 않은 기술에 대한 위험',
          '실현되지 않는 기대에 대한 손실 가능성'
        ],
        portfolio: {
          cash: 10,
          bonds: 10,
          stocks: 65,
          alternatives: 15
        },
        recommendations: [
          'AI, 신재생에너지 등 미래 산업 섹터 ETF 투자',
          '혁신적 비즈니스 모델 기업 발굴',
          '벤처캐피탈 펀드를 통한 스타트업 간접 투자'
        ]
      }
    };
    
    const personality = personalities[result];
    
    return (
      <div className="result-container">
        <div className="result-header">
          <h1>당신의 투자 성향은</h1>
          <h2 className="personality-name">{personality.name}</h2>
        </div>
        
        <div className="result-slogan">
          <p className="slogan-text">"{personality.slogan}"</p>
          <p className="description-text">{personality.description}</p>
        </div>
        
        <div className="characteristics-box">
          <h3>주요 특징</h3>
          
          <div className="strengths-weaknesses">
            <div className="strengths">
              <h4>강점</h4>
              <ul>
                {personality.strengths.map((strength, index) => (
                  <li key={index}>{strength}</li>
                ))}
              </ul>
            </div>
            
            <div className="weaknesses">
              <h4>주의점</h4>
              <ul>
                {personality.weaknesses.map((weakness, index) => (
                  <li key={index}>{weakness}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <PortfolioChart portfolio={personality.portfolio} />
        
        <div className="investment-assets">
          <h3>추천 투자 자산</h3>
          <p className="assets-text">{personality.investment}</p>
        </div>
        
        <div className="strategy-box">
          <h3>맞춤형 투자 전략</h3>
          <ul>
            {personality.recommendations.map((recommendation, index) => (
              <li key={index}>{recommendation}</li>
            ))}
          </ul>
        </div>
        
        <div className="restart-button-container">
          <button 
            onClick={() => setCurrentStep('intro')}
            className="primary-button"
          >
            다시 테스트하기
          </button>
        </div>
      </div>
    );
  };

  // 현재 단계에 따라 화면 렌더링
  const renderCurrentStep = () => {
    if (currentStep === 'intro') {
      return renderIntro();
    } else if (currentStep === 'result') {
      return renderResult();
    } else {
      return renderQuestion(currentStep);
    }
  };

  return (
    <div className="app-container">
      <div className="test-container">
        {renderCurrentStep()}
      </div>
    </div>
  );
};

export default InvestmentPersonalityTest;