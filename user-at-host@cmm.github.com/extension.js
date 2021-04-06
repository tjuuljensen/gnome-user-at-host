/*Derived from Simple-Username.  https://extensions.gnome.org/extension/807/simple-name/*/
const St = imports.gi.St;
const Main = imports.ui.main;
const GLib = imports.gi.GLib;

let label;

function init() {
    label = new St.Button({style_class: 'userHost-extension-format',
                           reactive: true,
                           can_focus: true,
                           x_fill: true,
                           y_fill: false,
                           track_hover: true,
                           label: GLib.get_user_name() + '@' + GLib.get_host_name()});
}

function enable() {
    let children = Main.panel._centerBox.get_children();
    Main.panel._centerBox.insert_child_at_index(label, children.length);
}

function disable() {
    Main.panel._centerBox.remove_child(label);
}
