function designerPdfViewer(h, word) {
    let maxHeight=0,words='abcdefghijklmnopqrstuvwxyz',obj={};
    for(let j=0;j<h.length;j++)
        obj[words[j]]=h[j];
    for(let i=0;i<word.length;i++)
        if(maxHeight<obj[word[i]])maxHeight=obj[word[i]]
    return word.length*maxHeight;
}
//or
function designerPdfViewer2(h,word)
{
    let maxHeight=0;
    for(let i=0;i<word.length;i++)
    {
        let index=word.charCodeAt(i)-97;
        let height=h[index];
        if(maxHeight<height)maxHeight=height;
    }
    console.log(word.length*maxHeight);
}
designerPdfViewer2([1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],'abc')