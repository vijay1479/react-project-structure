import moment from "moment";

/**
 * @description formats number with thousand sepeartor(e.g. 1000000 => 1,000,000)
 */

export const formatNumberWithThousandsSeperator = (value:any)=> {
    return Math.floor(value).toLocaleString();
}

/**
 * @description calculates difference between two dates
 */

export const getTimeDifferenceByDate = (date1:any ,date2:any)=> {
    var a = moment([
        parseInt(date1.split("-")[0]),
        parseInt(date1.split("-")[1]),
      ]);
      var b = moment([
        parseInt(date2.split("-")[0]),
        parseInt(date2.split("-")[1]),
      ]);
  
      var years = a.diff(b, "years");
      b.add(years, "years");
  
      var months = a.diff(b, "months");
      b.add(months, "months");
      if (months > 0) return years + " yr " + months + " mo ";
      else return years + " yr ";
}

/**
 * @description slices text
 */

export const sliceText = (text:string,index:number)=> {
    
   return text?.slice(0, index)
}


/**
 * @description removes HTML tags from string
 */

export const removeSpecialCharacters = (text:string)=> {
   return text.replace(
        /([~!@#$%^&*()_+=`{}\[\]\|\\:;'<>,.\/? ])+/g,
        "-"
      ).replace(/^(-)+|(-)+$/g,"")
}

/**
 * @description counts number of days from timestamp(Z)
 */

export const getDaysFromTimestamp = (date:any)=> {
   return Math.floor(
        (Date.parse(new Date().toISOString()) -
          Date.parse(date)) /
          86400000
      )
}

