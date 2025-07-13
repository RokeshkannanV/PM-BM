import axios from 'axios';
import * as cheerio from 'cheerio';


export const fetchPageTitle = async (url) => {
  try {
    const res = await axios.get(url);
    const $ = cheerio.load(res.data);
    const title = $('title').text();
    return title || 'No Title';
  } catch {
    return 'No Title Found';
  }
};

