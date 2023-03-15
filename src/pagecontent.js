//Object to deal with laying out objects on a page because I hate how repetitive it is 
//With the normal methods.

//PageContent objects should have a 'parent' defined, as well as 'makePage' and 'clear' functions
export const PageContent = (parent, content) => {
        let _parent = parent;
        let _content = content;

        function setContent(content){
            _content.remove(); //Before setting new content, clear the old one from the DOM
            _content = content;
        }

        function setParent(parent){
            console.log('Parent is being set');
            _parent = parent;
        }

        function appendChild(child){
            content.appendChild(child);
        }

        //makePage should be defined by the inheritors
        //Ultimately what is in the content will be added to the parent
        function makePage(){
            console.log('makePage is being called');
            appendChild(child);
        }

        //clear should be defined by the inheritors
        function clear(){
            console.log('clear is being called');
            if(_content == undefined){return 'No content to clear';}
            _content.remove();
        }

        return{
            setContent,
            setParent,
            makePage,
            clear,
        }
};