import { EApiActions } from '../../../../ressources/comon';
import { Query } from '../../../query/query.module';

export class getBalanceAndCashBack {
  public query?: Query;

  /**
   * Get the account balance
   * @returns Balance as a float
   */
  async getBalanceAndCashBack() {
    return new Promise<number>((resolve, reject) => {
      this.query
        ?.makeCall(EApiActions.getBalanceAndCashBack)
        .then((response) => {
          if (response.includes('ACCESS_BALANCE'))
            return resolve(parseFloat(response.split(':')[1]));
          reject(response);
        })
        .catch((err) => reject(err));
    });
  }
}
