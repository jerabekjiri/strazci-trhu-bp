import { HttpRequest } from '../modules/shared/services/http-request.service';
export class MarketControllerApi extends HttpRequest {

    constructor(api_url) {

      super();

      if (api_url) {
        this.api_url = MySuperApp.back_end_endpoint + api_url;
      } else {
        this.api_url = MySuperApp.back_end_endpoint;
      }
    }

    getBaseUrl() {
      return this.api_url;
    }

    getProducts(idPlayer, file) {    
      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let handleAs = file ? 'blob' : undefined;

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      var url = this.getBaseUrl() + `/market/${idPlayer}/products`;
      return this.gatewayRequest(url, 'GET', null, queryParams, handleAs, formParams);  
    }

    buyProduct(buyProductDto, file) {
            
      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let handleAs = file ? 'blob' : undefined;

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      var url = this.getBaseUrl() + '/market/products/buy';
      return this.gatewayRequest(url, 'POST', buyProductDto, queryParams, handleAs, formParams);  
    }

    activateProductInventory(idProductInventory, file) {
      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let handleAs = file ? 'blob' : undefined;

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      var url = this.getBaseUrl() + `/market/inventory/${idProductInventory}/activate`;
      return this.gatewayRequest(url, 'PATCH', null, queryParams, handleAs, formParams);  
    }

    getCategories(file) {
      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let handleAs = file ? 'blob' : undefined;

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      var url = this.getBaseUrl() + '/market/categories';
      return this.gatewayRequest(url, 'GET', null, queryParams, handleAs, formParams);  
    }

    getGroups(file) {
      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let handleAs = file ? 'blob' : undefined;

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      var url = this.getBaseUrl() + '/market/groups';
      return this.gatewayRequest(url, 'GET', null, queryParams, handleAs, formParams);  
    }

    getInventory(idPlayer, file) {    
      
      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let handleAs = file ? 'blob' : undefined;

      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      var url = this.getBaseUrl() + `/market/${idPlayer}/inventory`;
      return this.gatewayRequest(url, 'GET', null, queryParams, handleAs, formParams);  
    }

  buildCollectionParam (param, collectionFormat) {
    if (!param) {
      return null;
    }
    switch (collectionFormat) {
      case 'csv':
        return param.join(',');
      case 'ssv':
        return param.join(' ');
      case 'tsv':
        return param.join('\t');
      case 'pipes':
        return param.join('|');
      case 'multi':
        // return the array directly as SuperAgent will handle it as expected
        return param;
      default:
        throw new Error('Unknown collection format: ' + collectionFormat);
    }
  };

}

