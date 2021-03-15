import {request} from './request.js';
export function getDetails(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}
export function getRecom(){
    return request({
        url:'/recommend',
    })
}

export class Shop{
    constructor(shopInfo){
        this.logo=shopInfo.shopLogo;
        this.score=shopInfo.score;
        this.name=shopInfo.name;
        this.cFans=shopInfo.cFans;
        this.cGoods=shopInfo.cGoods;
        this.cSells=shopInfo.cSells
    }
}
export class Title{
    constructor(itemInfo,columns){
        this.price=itemInfo.price;
        this.oldPrice=itemInfo.oldPrice;
        this.title=itemInfo.title;
        this.topImages=itemInfo.topImages;
        this.columns=columns;
    }
}
export class ImgShow{
    constructor(detailInfo){
        this.desc=detailInfo.desc
        this.key=detailInfo.detailImage[0].key;
        this.list=detailInfo.detailImage[0].list;

    }
}
export class Params{
    constructor(itemParams,rate){
        this.disclaimer=itemParams.rule.disclaimer
        this.anchor=itemParams.rule.anchor
        this.tables1=itemParams.rule.tables[0]
        this.tables2=itemParams.rule.tables[1]
        this.rule_key=itemParams.rule.key
        this.key=itemParams.info.key;
        this.set=itemParams.info.set;
        this.rate= rate.list

    }
}
export class skuInfo{
    constructor(skuInfo){
        this.defaultPrice=skuInfo.defaultPrice
        this.totalStock=skuInfo.totalStock
        this.title=skuInfo.title
        this.skus=skuInfo.skus
        this.size=skuInfo.props[1];
        this.color=skuInfo.props[0];
   

    }
}


