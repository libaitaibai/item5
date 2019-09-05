export default {
  // 数据
  state: {
      routes: []
  },
  // 函数
  mutations: {
      setRoutes(state,layload){
            //获取写好的routes给这里的routes
          state.routes=[...state.routes,...layload];
      }
  },
  // 计算属性
  // wrapGetters初始化getters，接受3个参数，store表示当前的Store实例，moduleGetters当前模块下所有的getters，modulePath对应模块的路径
  // function `wrapGetters` (store, moduleGetters, modulePath) {}
  getters: {
      checkPermissionRouter: function (state) {
          //v-show="this.$store.getters.checkPermissionRouter(['/dbManagement/api/'])"点击某个按钮使v-show="true"显示路由
          //_targetPath=['/dbManagement/db/'],_globalRouters=[{path:;name:;}],_actualRouters="*"
          return function (_targetPath, _globalRouters = state.routes, _actualRouters = this.identity.permissions || []) {
            //创建router hash table
            // console.log(this)
            var _globalRouterHash = {};
    
            //返回对象中最后一层的children属性
            function _findLastChild(_obj) {
              if (_obj.children && _obj.children[0]) {
                return _findLastChild(_obj.children[0]);
              } else {
                return _obj
              }
            }
    
            //将树状结构打平成hash，以完整的path为key，router对象和index为value
            function _deepProcess(_routers, _parentPath, _parentRouter, _indexPath) {
              // console.log(_routers,111111, _parentPath,2222222, _parentRouter,3333333, _indexPath)
              // console.log(_parentRouter)
              if (!_routers || !_routers[0]) return;
              _parentPath = _parentPath || '';
              _indexPath = _indexPath || 0
              //给每一个_routers添加一个函数function (i, n){}
              // console.log(_routers)
              $.each(_routers, function (i, n) {
                var _fullPath;
                var _self;
                if (n.path.indexOf('/') == 0 || _parentPath.lastIndexOf('/') == _parentPath.length - 1) {
                  _fullPath = _parentPath + n.path;
                } else {
                  _fullPath = _parentPath + '/' + n.path;
                }
                // $.extend()合并对象并且替换前面的属性
                _self = $.extend(true, {}, n);
                _self.children = [];
                var _partent;
                if (_parentRouter) {
                  _partent = $.extend(true, {}, _parentRouter);
                  _findLastChild(_partent).children = [_self];
                }
                if (!_globalRouterHash[_fullPath]) _globalRouterHash[_fullPath] = { router: _partent || _self, index: _indexPath + '-' + i };
                _deepProcess(n.children, _fullPath, _partent || _self, _indexPath + '-' + i);
              //
              });
            }
    
            //将树状routers打平到hash table中，并且使用index属性保存routers的顺序用于优先级
            // _globalRouters=[{path:;name:;}]
            _deepProcess(_globalRouters);
    
    
            //处理redirect
            var _otherHash = {}
    
            function _findChild(_obj, cb, _parentPath) {
    
              _parentPath = _parentPath || '';
              var _fullPath = '';
              if (_obj.path.indexOf('/') == 0 || _parentPath.lastIndexOf('/') == _parentPath.length - 1) {
                _fullPath = _parentPath + _obj.path;
              } else {
                _fullPath = _parentPath + '/' + _obj.path;
              }
    
              cb && cb(_obj, _fullPath);
              if (_obj.children && _obj.children[0]) {
                _findChild(_obj.children[0], cb, _fullPath);
              }
            }
    
            var _redirectArr = [];
            $.each(_actualRouters, function (i, n) {
              if (!_globalRouterHash[n]) return true;
              _findChild(_globalRouterHash[n].router, function (n, _parentPath) {
                var _redirect = n.redirect;
                if (_redirect) {
                  if (_redirect == '/') {
                    _redirectArr.push(_parentPath + '/');
                  } else {
                    if (_redirect.indexOf('/') == 0) {
                      _redirectArr.push(_redirect);
                    } else {
                      var _tempArr = _parentPath.split('/');
                      _tempArr.pop();
                      _redirectArr.push(_tempArr.join('/') + '/' + _redirect);
                    }
                  }
                }
              });
            })
    
            _actualRouters = _actualRouters.concat(_redirectArr);
    
    //	$.each(_finalRouters,function(i,n){
    //		_result.push(n.router)
    //	});
    
            var _show = false;
            // console.log(_actualRouters);
            $.each(_targetPath, function (i, n) {
              $.each(_actualRouters, function (ii, nn) {
                if (nn == n) {
                  _show = true;
                  return false;
                } else {
                  if (nn.lastIndexOf('*') == nn.length - 1 && nn.lastIndexOf('*') >= 0) {
                    if (n.match(new RegExp('^' + nn.replace('*', '.*')))) {
                      _show = true;
                      return false;
                    }
                  } else {
                    if (nn.match(new RegExp('^' + n))) {
                      _show = true;
                      return false;
                    }
                  }
                }
              })
    
            });
            // console.log(_show);
            return _show;
    
          }
        }
  }
}
