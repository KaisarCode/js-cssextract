// Simple CSS selectors/rules extractor
function CSSExtract(str = '') {
    
    // Remove comments
    var rx = /\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm;
    str = str.replace(rx, '');
    str = str.replace(rx, '');
    
    // Remove multi spaces
    str = str.replace(/\s+/g, ' ');
    
    // Extract rules
    var out = {};
    var css = str.split('}');
    css.forEach(function(c){
        c += '}';
        c = c.trim();
        if (c.match(/.*{.*}/g)) {
            c = c.split('{');
            c[1] = c[1].replace('}', '');
            c[0] = c[0].trim();
            c[1] = c[1].trim();
            out[c[0]] = c[1];
        }
    });
    
    // Return
    return out;
}
