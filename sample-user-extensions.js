LocatorBuilders.add('custom locator id goes here', function(e) {
    if (e.id) {
        return "css=" + e.tagName + '#' + e.id;
    }
    return null;
});

Selenium.prototype.getTextLength = function(locator) {
    return this.getText(locator).length;
};

Selenium.prototype.doTypeRepeated = function(locator, text) {
    // All locator-strategies are automatically handled by "findElement"
    var element = this.page().findElement(locator);

    // Create the text to type
    var valueToType = text + text;

    // Replace the element text with the new text
    this.page().replaceText(element, valueToType);
};