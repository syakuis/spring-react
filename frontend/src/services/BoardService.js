import axios from 'axios';
import Qs from 'qs';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

let count = 0;

export default class BoardService {
  constructor() {
    this.page = 0;
    this.limit = 10;

    this.http = axios.create({
      baseURL: '/api',
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
      paramsSerializer: params => Qs.stringify(params, { arrayFormat: 'repeat' }),
    });

    this.http.interceptors.request.use((c) => {
      if (count === 0) {
        NProgress.start();
      }
      count += 1;
      return c;
    });

    this.http.interceptors.response.use((c) => {
      count -= 1;
      if (count === 0) {
        NProgress.done();
      }
      return c;
    });
  }

  getBoardPage(page, limit) {
    if (page > 0) {
      this.page = page - 1 || 0;
    }

    if (limit > 0) {
      this.limit = limit || 10;
    }

    return {
      page: this.page,
      limit: this.limit,
    };
  }

  getBoardList(page, limit) {
    return this.http.get('/board', {
      params: this.getBoardPage(page, limit),
    });
  }

  getBoardObject(boardIdx) {
    return this.http.get(`/board/${boardIdx}`);
  }

  saveBoard(data) {
    return this.http.post('/board', data);
  }

  deleteBoard(boardIdx) {
    return this.http.delete(`/board/${boardIdx}`);
  }
}
