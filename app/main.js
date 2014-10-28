$(function() {
    var gui = require('nw.gui');

    var mainMenu = new gui.Menu({ type: 'menubar' });
    var dynamicMenu = new gui.Menu();

    function createNewMenuItem() {
        var index = dynamicMenu.items.length - 2;
        return new gui.MenuItem({
            label: 'Item ' + index.toString(),
            click: function() {
                for(var i = 0; i < dynamicMenu.items.length; i++) {
                    if(this.label === dynamicMenu.items[i].label) {
                        dynamicMenu.removeAt(i);
                        console.log(dynamicMenu.items);
                        break;
                    }
                }
            }
        });
    }

    dynamicMenu.append(new gui.MenuItem({
        label: 'Add New Item',
        click: function() {
            dynamicMenu.append(createNewMenuItem());
            console.log(dynamicMenu.items);
        }
    }));

    dynamicMenu.append(new gui.MenuItem({
        type: 'separator'
    }));

    dynamicMenu.append(createNewMenuItem());

    mainMenu.append(new gui.MenuItem({
        label: 'Dynamic Menu',
        submenu: dynamicMenu
    }));

    var viewMenu = new gui.Menu();

    viewMenu.append(new gui.MenuItem({
        label: 'Show Javascript Console',
        click: function() {
            gui.Window.get().showDevTools();
        }.bind(this)
    }));

    mainMenu.append(new gui.MenuItem({
        label: 'View',
        submenu: viewMenu
    }));

    gui.Window.get().menu = mainMenu;
});
