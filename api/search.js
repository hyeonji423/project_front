export default async function handler(req, res) {
  const { query } = req;
  
  try {
    const response = await fetch(`https://openapi.naver.com/v1/search/${query.type}`, {
      headers: {
        'X-Naver-Client-Id': process.env.NAVER_CLIENT_ID,
        'X-Naver-Client-Secret': process.env.NAVER_CLIENT_SECRET,
      },
    });
    
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('API 호출 에러:', error);
    res.status(500).json({ error: '서버 에러가 발생했습니다.' });
  }
} 