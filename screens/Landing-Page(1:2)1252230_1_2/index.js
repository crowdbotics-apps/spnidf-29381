import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_1_8} />
      <View style={styles.View_22_257}>
        <View style={styles.View_3_41}>
          <View style={styles.View_3_0} />
          <View style={styles.View_3_25}>
            <View style={styles.View_3_26}>
              <Text style={styles.Text_3_26}>Investment Fund</Text>
            </View>
            <View style={styles.View_3_30}>
              <Text style={styles.Text_3_30}>Research</Text>
            </View>
            <View style={styles.View_3_31}>
              <Text style={styles.Text_3_31}>Financial Planning</Text>
            </View>
            <View style={styles.View_3_32}>
              <Text style={styles.Text_3_32}>Corporate Government</Text>
            </View>
            <View style={styles.View_3_33}>
              <Text style={styles.Text_3_33}>Tax Planning</Text>
            </View>
            <View style={styles.View_3_34}>
              <Text style={styles.Text_3_34}>NRN Services</Text>
            </View>
            <View style={styles.View_3_35}>
              <Text style={styles.Text_3_35}>Portfolio</Text>
            </View>
            <View style={styles.View_3_36}>
              <Text style={styles.Text_3_36}>Disclosure</Text>
            </View>
            <View style={styles.View_3_37}>
              <Text style={styles.Text_3_37}>Dowload</Text>
            </View>
            <View style={styles.View_3_38}>
              <Text style={styles.Text_3_38}>Initiative</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3_59}>
          <View style={styles.View_1_7} />
          <View style={styles.View_3_58}>
            <View style={styles.View_1_20}>
              <View style={styles.View_1_15}>
                <Text style={styles.Text_1_15}>COVID-19</Text>
              </View>
              <View style={styles.View_1_16}>
                <Text style={styles.Text_1_16}>Procurement</Text>
              </View>
              <View style={styles.View_1_17}>
                <Text style={styles.Text_1_17}>CSR</Text>
              </View>
              <View style={styles.View_1_18}>
                <Text style={styles.Text_1_18}>Open Data</Text>
              </View>
            </View>
            <View style={styles.View_1_21}>
              <View style={styles.View_1_9}>
                <Text style={styles.Text_1_9}>Home</Text>
              </View>
              <View style={styles.View_1_10}>
                <Text style={styles.Text_1_10}>About Us</Text>
              </View>
              <View style={styles.View_1_11}>
                <Text style={styles.Text_1_11}>Careers</Text>
              </View>
              <View style={styles.View_3_24}>
                <Text style={styles.Text_3_24}>Contact</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3_44}>
        <View style={styles.View_3_6}>
          <View style={styles.View_1_14}>
            <View style={styles.View_1_12} />
            <View style={styles.View_1_13}>
              <Text style={styles.Text_1_13}>LOGIN</Text>
            </View>
          </View>
          <View style={styles.View_3_42}>
            <View style={styles.View_3_1} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e96/5c96/b7c0e57ba8cdef68224c7debf9cc7e9b"
              }}
              style={styles.ImageBackground_3_3}
            />
          </View>
          <View style={styles.View_3_12}>
            <View style={styles.View_3_7} />
            <View style={styles.View_3_11}>
              <View style={styles.View_3_8}>
                <Text style={styles.Text_3_8}>English</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d05/5b74/6e552b7697b40b4b7dc5e45384c549ee"
                }}
                style={styles.ImageBackground_3_9}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_3_43}>
          <View style={styles.View_3_21}>
            <Text style={styles.Text_3_21}>
              Sudhurpaschim Investment Development Fund
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/525c/c049/e35fe9cb3bd52f8943a95bb070bfe2eb"
            }}
            style={styles.ImageBackground_3_22}
          />
        </View>
      </View>
      <View style={styles.View_22_256}>
        <View style={styles.View_3_57}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70c8/ad43/dd3877954aed540fcc22ad1ebe333b8f"
            }}
            style={styles.ImageBackground_3_45}
          />
          <View style={styles.View_22_253}>
            <View style={styles.View_22_251} />
            <View style={styles.View_22_252}>
              <Text style={styles.Text_22_252}>Notice</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_3_55}>
          <View style={styles.View_3_49} />
          <View style={styles.View_3_54}>
            <View style={styles.View_3_47}>
              <Text style={styles.Text_3_47}>Project Name</Text>
            </View>
            <View style={styles.View_3_50}>
              <Text style={styles.Text_3_50}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.....
              </Text>
            </View>
            <View style={styles.View_3_67}>
              <View style={styles.View_3_51} />
              <View style={styles.View_3_52}>
                <Text style={styles.Text_3_52}>Read more</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3_73}>
        <View style={styles.View_3_60} />
        <View style={styles.View_3_72}>
          <View style={styles.View_3_71}>
            <View style={styles.View_3_61}>
              <Text style={styles.Text_3_61}>Paid up Capital:</Text>
            </View>
            <View style={styles.View_3_65}>
              <Text style={styles.Text_3_65}>Total Shares</Text>
            </View>
            <View style={styles.View_3_62}>
              <Text style={styles.Text_3_62}>Issued Capital:</Text>
            </View>
            <View style={styles.View_3_66}>
              <Text style={styles.Text_3_66}>Issued Sahre</Text>
            </View>
          </View>
          <View style={styles.View_6_71}>
            <View style={styles.View_6_68} />
            <View style={styles.View_6_69}>
              <Text style={styles.Text_6_69}>Calculate</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3_84} />
      <View style={styles.View_6_45}>
        <View style={styles.View_3_76}>
          <Text style={styles.Text_3_76}>WHO WE ARE</Text>
        </View>
        <View style={styles.View_6_44}>
          <View style={styles.View_3_122}>
            <View style={styles.View_3_77} />
            <View style={styles.View_3_85}>
              <Text style={styles.Text_3_85}>welcome to SPNIDF</Text>
            </View>
            <View style={styles.View_3_121}>
              <View style={styles.View_3_81} />
              <View style={styles.View_3_97}>
                <Text style={styles.Text_3_97}>
                  At SPNIDF, we believe in organized investing. Our purpose is
                  to help people grow and preserve their wealth and secure their
                  goals. Today &amp; Toworrow almg with aiding national
                  development.
                </Text>
              </View>
            </View>
            <View style={styles.View_3_120}>
              <View style={styles.View_3_119} />
              <View style={styles.View_3_101}>
                <Text style={styles.Text_3_101}>read more</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_3_123}>
            <View style={styles.View_3_124} />
            <View style={styles.View_3_125}>
              <Text style={styles.Text_3_125}>Investment fund</Text>
            </View>
            <View style={styles.View_3_126}>
              <View style={styles.View_3_127} />
              <View style={styles.View_3_128}>
                <Text style={styles.Text_3_128}>
                  Investment fund is simply a platform that allows a group of
                  investors to pool their money together with a predetermined
                  investment objective under expertise of the company
                </Text>
              </View>
            </View>
            <View style={styles.View_3_129}>
              <View style={styles.View_3_130} />
              <View style={styles.View_3_131}>
                <Text style={styles.Text_3_131}>read more</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_3_132}>
            <View style={styles.View_3_133} />
            <View style={styles.View_3_134}>
              <Text style={styles.Text_3_134}>Systematic investment plan</Text>
            </View>
            <View style={styles.View_3_135}>
              <View style={styles.View_3_136} />
              <View style={styles.View_3_137}>
                <Text style={styles.Text_3_137}>
                  There is a special strategy for accumulating wealth over a
                  period of time by investing regularly at regualr interval of
                  time in investment schemes.
                </Text>
              </View>
            </View>
            <View style={styles.View_3_138}>
              <View style={styles.View_3_139} />
              <View style={styles.View_3_140}>
                <Text style={styles.Text_3_140}>read more</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_3_141}>
            <View style={styles.View_3_142} />
            <View style={styles.View_3_143}>
              <Text style={styles.Text_3_143}>Tax planning</Text>
            </View>
            <View style={styles.View_3_144}>
              <View style={styles.View_3_145} />
              <View style={styles.View_3_146}>
                <Text style={styles.Text_3_146}>
                  Tax planning is a corporate term that is used to describe the
                  process utilizedby individuals and business to pay taxes in
                  organizedway.
                </Text>
              </View>
            </View>
            <View style={styles.View_3_147}>
              <View style={styles.View_3_148} />
              <View style={styles.View_3_149}>
                <Text style={styles.Text_3_149}>read more</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_17_57}>
        <View style={styles.View_6_48} />
        <View style={styles.View_17_66}>
          <View style={styles.View_7_7}>
            <View style={styles.View_7_6}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6ec/bf36/20cea39191007ac852727a69d6d53ade"
                }}
                style={styles.ImageBackground_6_50}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48e2/cfc0/9a04e063a6d7888c3fb39577c05b338e"
                }}
                style={styles.ImageBackground_7_1}
              />
            </View>
            <View style={styles.View_7_5}>
              <View style={styles.View_7_3} />
              <View style={styles.View_7_4}>
                <Text style={styles.Text_7_4}>What our Chairman says</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_7_0}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9e5/ad23/3c0956daeda7b2aafc8107f0a8dfb463"
              }}
              style={styles.ImageBackground_6_49}
            />
            <View style={styles.View_17_35}>
              <Text style={styles.Text_17_35}>
                Provide us with your feedback
              </Text>
            </View>
            <View style={styles.View_6_59}>
              <View style={styles.View_6_57} />
              <View style={styles.View_17_52}>
                <Text style={styles.Text_17_52}>feedback</Text>
              </View>
            </View>
            <View style={styles.View_17_43}>
              <View style={styles.View_17_44} />
              <View style={styles.View_17_45}>
                <Text style={styles.Text_17_45}>your Name</Text>
              </View>
            </View>
            <View style={styles.View_17_53}>
              <View style={styles.View_17_54} />
              <View style={styles.View_17_55}>
                <Text style={styles.Text_17_55}>Submit</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_17_34}>
            <View style={styles.View_17_6}>
              <View style={styles.View_17_0} />
              <View style={styles.View_17_2}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15e8/862d/944a00f10cb7675cbccb74970580c4ef"
                  }}
                  style={styles.ImageBackground_17_3}
                />
                <View style={styles.View_17_5}>
                  <Text style={styles.Text_17_5}>Financial Calculator</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_17_7}>
              <View style={styles.View_17_8} />
              <View style={styles.View_17_9}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15e8/862d/944a00f10cb7675cbccb74970580c4ef"
                  }}
                  style={styles.ImageBackground_17_10}
                />
                <View style={styles.View_17_12}>
                  <Text style={styles.Text_17_12}>ROI Calculator</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_17_13}>
              <View style={styles.View_17_14} />
              <View style={styles.View_17_15}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e802/b876/d927fd77fc5e388d4e17bc09b59ec945"
                  }}
                  style={styles.ImageBackground_17_19}
                />
                <View style={styles.View_17_18}>
                  <Text style={styles.Text_17_18}>Ask expert option</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_17_21}>
              <View style={styles.View_17_22} />
              <View style={styles.View_17_28}>
                <View style={styles.View_17_29}>
                  <Text style={styles.Text_17_29}>Review Portfolio</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab4c/2a93/c06ba226506739fe1ce1d793ea1abed2"
                  }}
                  style={styles.ImageBackground_17_30}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_22_250}>
        <View style={styles.View_17_59}>
          <Text style={styles.Text_17_59}>Investment capital</Text>
        </View>
        <View style={styles.View_17_77}>
          <View style={styles.View_17_67}>
            <Text style={styles.Text_17_67}>Nepal Profile</Text>
          </View>
          <View style={styles.View_17_76}>
            <Text style={styles.Text_17_76}>Sudhurpaschim Profile</Text>
          </View>
        </View>
        <View style={styles.View_17_167}>
          <View style={styles.View_17_160}>
            <View style={styles.View_17_78} />
            <View style={styles.View_17_159}>
              <View style={styles.View_17_82}>
                <Text style={styles.Text_17_82}>Economic Indicator</Text>
              </View>
              <View style={styles.View_17_86}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02ca/c5d0/d08baa7af85c339eb6e51af400a7dd7a"
                  }}
                  style={styles.ImageBackground_17_87}
                />
                <View style={styles.View_17_88} />
                <View style={styles.View_17_89} />
                <View style={styles.View_17_90} />
              </View>
            </View>
          </View>
          <View style={styles.View_17_162}>
            <View style={styles.View_17_79} />
            <View style={styles.View_17_161}>
              <View style={styles.View_17_83}>
                <Text style={styles.Text_17_83}>Business Ranking</Text>
              </View>
              <View style={styles.View_17_124}>
                <View style={styles.View_17_123}>
                  <View style={styles.View_17_97}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a2e/0a19/d11bc2eb10bb6bbcfe9e56b8bf6c0e1d"
                      }}
                      style={styles.ImageBackground_17_98}
                    />
                  </View>
                  <View style={styles.View_17_100}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9bcd/10b0/3c43d0494aec36c2136c05670d665c6d"
                      }}
                      style={styles.ImageBackground_17_101}
                    />
                  </View>
                  <View style={styles.View_17_112}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9bcd/10b0/3c43d0494aec36c2136c05670d665c6d"
                      }}
                      style={styles.ImageBackground_17_113}
                    />
                  </View>
                  <View style={styles.View_17_103}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10aa/aead/19af0fc13b294b5146be27f1c9f2b764"
                      }}
                      style={styles.ImageBackground_17_104}
                    />
                  </View>
                  <View style={styles.View_17_115}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10aa/aead/19af0fc13b294b5146be27f1c9f2b764"
                      }}
                      style={styles.ImageBackground_17_116}
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2b3/4a61/95486a52350a0f77c10f788ae7b3b43a"
                  }}
                  style={styles.ImageBackground_17_122}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_17_164}>
            <View style={styles.View_17_80} />
            <View style={styles.View_17_163}>
              <View style={styles.View_17_84}>
                <Text style={styles.Text_17_84}>Investment Process</Text>
              </View>
              <View style={styles.View_17_137}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0629/6ca0/14234c810f9b0ad7a52a805da6465aac"
                  }}
                  style={styles.ImageBackground_17_127}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8781/d75e/c8367ef45bc619f97bc9721ab58dfa1e"
                  }}
                  style={styles.ImageBackground_17_125}
                />
                <View style={styles.View_17_136}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57bf/dfad/9906018094dfad5e2b1003dc22b49bb6"
                    }}
                    style={styles.ImageBackground_17_128}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57bf/dfad/9906018094dfad5e2b1003dc22b49bb6"
                    }}
                    style={styles.ImageBackground_17_130}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57bf/dfad/9906018094dfad5e2b1003dc22b49bb6"
                    }}
                    style={styles.ImageBackground_17_132}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57bf/dfad/9906018094dfad5e2b1003dc22b49bb6"
                    }}
                    style={styles.ImageBackground_17_134}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_17_166}>
            <View style={styles.View_17_81} />
            <View style={styles.View_17_165}>
              <View style={styles.View_17_85}>
                <Text style={styles.Text_17_85}>Project Bank</Text>
              </View>
              <View style={styles.View_17_138}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/653d/3c02/d2871cc8425d0bc7e2b2952b742d533f"
                  }}
                  style={styles.ImageBackground_17_139}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94d7/28e8/ed32b548ec6bd307563c1743e5a8b0f0"
                  }}
                  style={styles.ImageBackground_17_140}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e67c/ea56/3d888b8272cfa3991f9050024f59c3b4"
                  }}
                  style={styles.ImageBackground_17_143}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_22_248}>
        <View style={styles.View_17_168} />
        <View style={styles.View_17_170}>
          <Text style={styles.Text_17_170}>SP-NIDF Projects</Text>
        </View>
        <View style={styles.View_17_171}>
          <View style={styles.View_17_172}>
            <View style={styles.View_17_173} />
            <View style={styles.View_17_175}>
              <Text style={styles.Text_17_175}>Under Implementation</Text>
            </View>
            <View style={styles.View_17_242}>
              <View style={styles.View_17_240} />
              <View style={styles.View_17_241}>
                <Text style={styles.Text_17_241}>See projects</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_17_181}>
            <View style={styles.View_17_182} />
            <View style={styles.View_17_184}>
              <Text style={styles.Text_17_184}>UnDer Survey/ STudy</Text>
            </View>
            <View style={styles.View_17_243}>
              <View style={styles.View_17_244} />
              <View style={styles.View_17_245}>
                <Text style={styles.Text_17_245}>See projects</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_17_206}>
            <View style={styles.View_17_207} />
            <View style={styles.View_17_209}>
              <Text style={styles.Text_17_209}>Under Procurement</Text>
            </View>
            <View style={styles.View_17_252}>
              <View style={styles.View_17_253} />
              <View style={styles.View_17_254}>
                <Text style={styles.Text_17_254}>See projects</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_17_223}>
            <View style={styles.View_17_224} />
            <View style={styles.View_17_226}>
              <Text style={styles.Text_17_226}>UNSoliciated Project</Text>
            </View>
            <View style={styles.View_17_255}>
              <View style={styles.View_17_256} />
              <View style={styles.View_17_257}>
                <Text style={styles.Text_17_257}>See projects</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_22_230}>
        <View style={styles.View_17_260}>
          <View style={styles.View_17_261}>
            <Text style={styles.Text_17_261}>Bulletin Board</Text>
          </View>
        </View>
        <View style={styles.View_17_547}>
          <View style={styles.View_22_229}>
            <View style={styles.View_I22_229_17_344} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3555/32f5/94b19be3b10b88962270dd7220d0bb70"
              }}
              style={styles.ImageBackground_I22_229_17_345}
            />
            <View style={styles.View_I22_229_17_346}>
              <Text style={styles.Text_I22_229_17_346}>
                Title of this document
              </Text>
            </View>
            <View style={styles.View_I22_229_17_365}>
              <View style={styles.View_I22_229_17_365_17_348} />
              <View style={styles.View_I22_229_17_365_17_357}>
                <View style={styles.View_I22_229_17_365_17_349}>
                  <Text style={styles.Text_I22_229_17_365_17_349}>
                    Download
                  </Text>
                </View>
                <View style={styles.View_I22_229_17_365_17_353}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99d5/29e4/804c72b510617600ae1043450ec58345"
                    }}
                    style={styles.ImageBackground_I22_229_17_365_17_354}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_I22_229_17_366}>
              <View style={styles.View_I22_229_17_366_17_351} />
              <View style={styles.View_I22_229_17_366_17_360}>
                <View style={styles.View_I22_229_17_366_17_352}>
                  <Text style={styles.Text_I22_229_17_366_17_352}>
                    Read Now
                  </Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/553d/b8d6/fed7888816fe34f848f81e397d9b47be"
                  }}
                  style={styles.ImageBackground_I22_229_17_366_17_358}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_17_496}>
            <View style={styles.View_I17_496_17_344} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3555/32f5/94b19be3b10b88962270dd7220d0bb70"
              }}
              style={styles.ImageBackground_I17_496_17_345}
            />
            <View style={styles.View_I17_496_17_346}>
              <Text style={styles.Text_I17_496_17_346}>
                Title of this document
              </Text>
            </View>
            <View style={styles.View_I17_496_17_365}>
              <View style={styles.View_I17_496_17_365_17_348} />
              <View style={styles.View_I17_496_17_365_17_357}>
                <View style={styles.View_I17_496_17_365_17_349}>
                  <Text style={styles.Text_I17_496_17_365_17_349}>
                    Download
                  </Text>
                </View>
                <View style={styles.View_I17_496_17_365_17_353}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99d5/29e4/804c72b510617600ae1043450ec58345"
                    }}
                    style={styles.ImageBackground_I17_496_17_365_17_354}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_I17_496_17_366}>
              <View style={styles.View_I17_496_17_366_17_351} />
              <View style={styles.View_I17_496_17_366_17_360}>
                <View style={styles.View_I17_496_17_366_17_352}>
                  <Text style={styles.Text_I17_496_17_366_17_352}>
                    Read Now
                  </Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/553d/b8d6/fed7888816fe34f848f81e397d9b47be"
                  }}
                  style={styles.ImageBackground_I17_496_17_366_17_358}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_17_514}>
            <View style={styles.View_I17_514_17_344} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3555/32f5/94b19be3b10b88962270dd7220d0bb70"
              }}
              style={styles.ImageBackground_I17_514_17_345}
            />
            <View style={styles.View_I17_514_17_346}>
              <Text style={styles.Text_I17_514_17_346}>
                Title of this document
              </Text>
            </View>
            <View style={styles.View_I17_514_17_365}>
              <View style={styles.View_I17_514_17_365_17_348} />
              <View style={styles.View_I17_514_17_365_17_357}>
                <View style={styles.View_I17_514_17_365_17_349}>
                  <Text style={styles.Text_I17_514_17_365_17_349}>
                    Download
                  </Text>
                </View>
                <View style={styles.View_I17_514_17_365_17_353}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99d5/29e4/804c72b510617600ae1043450ec58345"
                    }}
                    style={styles.ImageBackground_I17_514_17_365_17_354}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_I17_514_17_366}>
              <View style={styles.View_I17_514_17_366_17_351} />
              <View style={styles.View_I17_514_17_366_17_360}>
                <View style={styles.View_I17_514_17_366_17_352}>
                  <Text style={styles.Text_I17_514_17_366_17_352}>
                    Read Now
                  </Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/553d/b8d6/fed7888816fe34f848f81e397d9b47be"
                  }}
                  style={styles.ImageBackground_I17_514_17_366_17_358}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_17_546}>
          <View style={styles.View_17_537}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adb6/b4bc/7de96f52eab1c407072e0732c6b581bc"
              }}
              style={styles.ImageBackground_17_536}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a5b/ff50/68220af1d9f2e95c36903de43663b1f9"
              }}
              style={styles.ImageBackground_17_534}
            />
          </View>
          <View style={styles.View_17_542}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adb6/b4bc/7de96f52eab1c407072e0732c6b581bc"
              }}
              style={styles.ImageBackground_17_543}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d251/20b0/500bc356366f839846b78301ac2349cf"
              }}
              style={styles.ImageBackground_17_544}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_22_228}>
        <View style={styles.View_17_549} />
        <View style={styles.View_17_580}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c977/8d23/21be04a116b0fdfdce5fc0c33ae9fb6e"
            }}
            style={styles.ImageBackground_17_571}
          />
          <View style={styles.View_17_579}>
            <View style={styles.View_17_552}>
              <Text style={styles.Text_17_552}>
                “One of the rapidly growing startup Ecosystem”
              </Text>
            </View>
            <View style={styles.View_17_553}>
              <Text style={styles.Text_17_553}>
                SPNIDF intended to build a strong ecosystem that is conductive
                for startups, to drive sustainable economic growth and generate
                large scale employment opportunities
              </Text>
            </View>
            <View style={styles.View_17_550}>
              <View style={styles.View_17_551}>
                <Text style={styles.Text_17_551}>
                  Entrepreneurship in nepal
                </Text>
              </View>
            </View>
            <View style={styles.View_17_578}>
              <View style={styles.View_17_576} />
              <View style={styles.View_17_577}>
                <Text style={styles.Text_17_577}>Discover More</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_22_255}>
        <View style={styles.View_22_82}>
          <View style={styles.View_22_54}>
            <View style={styles.View_22_55}>
              <Text style={styles.Text_22_55}>Announcement/Notice</Text>
            </View>
          </View>
          <View style={styles.View_22_64}>
            <Text style={styles.Text_22_64}>
              Notice for closure of office physically Notice for this event
              Notice for that event Invest your moeny{" "}
            </Text>
          </View>
        </View>
        <View style={styles.View_22_88}>
          <View style={styles.View_22_89}>
            <View style={styles.View_22_90}>
              <Text style={styles.Text_22_90}>Events</Text>
            </View>
          </View>
          <View style={styles.View_22_91}>
            <Text style={styles.Text_22_91}>
              Notice for closure of office physically Notice for this event
              Notice for that event Invest your moeny{" "}
            </Text>
          </View>
        </View>
        <View style={styles.View_22_92}>
          <View style={styles.View_22_93}>
            <View style={styles.View_22_94}>
              <Text style={styles.Text_22_94}>Media Coverage</Text>
            </View>
          </View>
          <View style={styles.View_22_95}>
            <Text style={styles.Text_22_95}>
              Notice for closure of office physically Notice for this event
              Notice for that event Invest your moeny{" "}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_22_105}>
        <View style={styles.View_22_97} />
        <View style={styles.View_22_104}>
          <Text style={styles.Text_22_104}>
            “When all people are thinking in the same direction,no one is
            thinking”
          </Text>
        </View>
      </View>
      <View style={styles.View_22_254}>
        <View style={styles.View_22_206}>
          <View style={styles.View_22_106} />
          <View style={styles.View_22_249}>
            <View style={styles.View_22_126}>
              <View style={styles.View_22_138}>
                <View style={styles.View_22_117}>
                  <View style={styles.View_22_118} />
                  <View style={styles.View_22_119}>
                    <Text style={styles.Text_22_119}>Email</Text>
                  </View>
                </View>
                <View style={styles.View_22_123}>
                  <View style={styles.View_22_124} />
                  <View style={styles.View_22_125}>
                    <Text style={styles.Text_22_125}>Phone</Text>
                  </View>
                </View>
                <View style={styles.View_22_120}>
                  <View style={styles.View_22_121} />
                  <View style={styles.View_22_122}>
                    <Text style={styles.Text_22_122}>Submit</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_22_139}>
                <Text style={styles.Text_22_139}>
                  Please drop an email or call us, our representative will
                  connect with you soon.
                </Text>
              </View>
              <View style={styles.View_22_108}>
                <Text style={styles.Text_22_108}>Get in touch with us</Text>
              </View>
              <View style={styles.View_22_259}>
                <View style={styles.View_22_258}>
                  <Text style={styles.Text_22_258}>Follow us on </Text>
                </View>
                <View style={styles.View_22_136}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81ae/e1a4/e28a41d221a37a3b1e942c85a452cf55"
                    }}
                    style={styles.ImageBackground_22_128}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f970/69ed/2992074fe84a45dd3dc9d6fe9c0c8e9b"
                    }}
                    style={styles.ImageBackground_22_130}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc45/d183/f874c8017ae41b92d28bce007addfc42"
                    }}
                    style={styles.ImageBackground_22_132}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/776c/8e87/da69930cbe966d598ec2fc381d3a139b"
                    }}
                    style={styles.ImageBackground_22_134}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_22_170}>
              <View style={styles.View_22_204}>
                <View style={styles.View_22_182}>
                  <Text style={styles.Text_22_182}>Navigate </Text>
                </View>
                <View style={styles.View_22_203}>
                  <View style={styles.View_22_192}>
                    <Text style={styles.Text_22_192}>Investment Fund</Text>
                  </View>
                  <View style={styles.View_22_193}>
                    <Text style={styles.Text_22_193}>Research</Text>
                  </View>
                  <View style={styles.View_22_194}>
                    <Text style={styles.Text_22_194}>Financial Planning</Text>
                  </View>
                  <View style={styles.View_22_195}>
                    <Text style={styles.Text_22_195}>Corporate Governance</Text>
                  </View>
                  <View style={styles.View_22_196}>
                    <Text style={styles.Text_22_196}>Tax Planning</Text>
                  </View>
                  <View style={styles.View_22_198}>
                    <Text style={styles.Text_22_198}>NRN Services</Text>
                  </View>
                  <View style={styles.View_22_199}>
                    <Text style={styles.Text_22_199}>Portfolio</Text>
                  </View>
                  <View style={styles.View_22_200}>
                    <Text style={styles.Text_22_200}>Disclosure</Text>
                  </View>
                  <View style={styles.View_22_201}>
                    <Text style={styles.Text_22_201}>Initiative</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_22_169}>
              <View style={styles.View_22_163}>
                <View style={styles.View_22_154}>
                  <Text style={styles.Text_22_154}>
                    Provide your feedback for us
                  </Text>
                </View>
                <View style={styles.View_22_162}>
                  <View style={styles.View_22_159} />
                  <View style={styles.View_22_161}>
                    <View style={styles.View_22_160}>
                      <Text style={styles.Text_22_160}>Feedback</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0cc/3030/263c9ca46f1e4d9ca066b729df8576b5"
                      }}
                      style={styles.ImageBackground_22_151}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_22_150}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42ea/b2e4/0eb62f42a3d175af7f4716ef45eef2a3"
                  }}
                  style={styles.ImageBackground_22_148}
                />
                <View style={styles.View_22_149}>
                  <Text style={styles.Text_22_149}>SPNIDF</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_22_222}>
          <View style={styles.View_22_207} />
          <View style={styles.View_22_227}>
            <View style={styles.View_22_208}>
              <Text style={styles.Text_22_208}>Copyrights 2021|SPNIDF</Text>
            </View>
            <View style={styles.View_22_226}>
              <Text style={styles.Text_22_226}>
                RT1|Privacy Policy|Terms and Use
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_22_221}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4708/0449/fd479d83b874688f4702ae5232678132"
          }}
          style={styles.ImageBackground_22_209}
        />
        <View style={styles.View_22_220}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24d3/5043/ba6bea8cec6ff01df81bf8c7dc1497d9"
            }}
            style={styles.ImageBackground_22_210}
          />
          <View style={styles.View_22_212}>
            <Text style={styles.Text_22_212}>Chatbot</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(251, 251, 251, 1)" },
  View_2: { height: hp("699.4535519125683%") },
  View_1_8: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.4583333333333333%"),
    top: hp("-26.366120218579237%"),
    backgroundColor: "rgba(33, 122, 128, 1)"
  },
  View_22_257: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3_41: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.808743169398905%")
  },
  View_3_0: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(11, 60, 152, 1)"
  },
  View_3_25: {
    width: wp("95.69444444444444%"),
    minWidth: wp("95.69444444444444%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.083333333333333%"),
    top: hp("2.1857923497267784%")
  },
  View_3_26: {
    width: wp("9.305555555555555%"),
    minWidth: wp("9.305555555555555%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579212%"),
    justifyContent: "flex-start"
  },
  Text_3_26: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_30: {
    width: wp("5.208333333333334%"),
    minWidth: wp("5.208333333333334%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.875%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3_30: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_31: {
    width: wp("10.208333333333334%"),
    minWidth: wp("10.208333333333334%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.65277777777778%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3_31: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_32: {
    width: wp("12.63888888888889%"),
    minWidth: wp("12.63888888888889%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.43055555555555%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3_32: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_33: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.638888888888886%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3_33: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_34: {
    width: wp("7.638888888888889%"),
    minWidth: wp("7.638888888888889%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.36111111111111%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3_34: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_35: {
    width: wp("4.861111111111112%"),
    minWidth: wp("4.861111111111112%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.56944444444444%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3_35: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_36: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.00000000000001%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3_36: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_37: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.47222222222223%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3_37: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_38: {
    width: wp("4.722222222222222%"),
    minWidth: wp("4.722222222222222%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.97222222222223%"),
    top: hp("0.1366120218579212%"),
    justifyContent: "flex-start"
  },
  Text_3_38: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_59: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_7: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(11, 152, 135, 1)"
  },
  View_3_58: {
    width: wp("88.40277777777777%"),
    minWidth: wp("88.40277777777777%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("2.3224043715846996%")
  },
  View_1_20: {
    width: wp("28.749999999999996%"),
    minWidth: wp("28.749999999999996%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_15: {
    width: wp("5.416666666666667%"),
    minWidth: wp("5.416666666666667%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_15: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_16: {
    width: wp("7.222222222222221%"),
    minWidth: wp("7.222222222222221%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.055555555555555%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_16: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_17: {
    width: wp("2.361111111111111%"),
    minWidth: wp("2.361111111111111%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.194444444444443%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_17: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_18: {
    width: wp("5.833333333333333%"),
    minWidth: wp("5.833333333333333%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.916666666666664%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_18: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_21: {
    width: wp("24.930555555555557%"),
    minWidth: wp("24.930555555555557%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.472222222222214%"),
    top: hp("0.27322404371584685%")
  },
  View_1_9: {
    width: wp("3.4027777777777777%"),
    minWidth: wp("3.4027777777777777%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185792343%"),
    justifyContent: "flex-start"
  },
  Text_1_9: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_10: {
    width: wp("5.138888888888888%"),
    minWidth: wp("5.138888888888888%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.833333333333343%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_10: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_11: {
    width: wp("4.305555555555555%"),
    minWidth: wp("4.305555555555555%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.611111111111114%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_11: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_24: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.55555555555557%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_44: {
    width: wp("88.88888888888889%"),
    minWidth: wp("88.88888888888889%"),
    height: hp("9.153005464480875%"),
    minHeight: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("8.879781420765028%")
  },
  View_3_6: {
    width: wp("27.291666666666664%"),
    minWidth: wp("27.291666666666664%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.597222222222214%"),
    top: hp("2.185792349726775%")
  },
  View_1_14: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.236111111111114%"),
    top: hp("0%")
  },
  View_1_12: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(11, 60, 152, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_1_13: {
    width: wp("4.027777777777778%"),
    minWidth: wp("4.027777777777778%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0138888888888857%"),
    top: hp("1.2295081967213122%"),
    justifyContent: "flex-start"
  },
  Text_1_13: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_42: {
    width: wp("4.513888888888888%"),
    minWidth: wp("4.513888888888888%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3_1: {
    width: wp("4.513888888888888%"),
    minWidth: wp("4.513888888888888%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(251, 251, 251, 1)",
    borderColor: "rgba(224, 224, 224, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 39,
    borderTopRightRadius: 39,
    borderBottomLeftRadius: 39,
    borderBottomRightRadius: 39
  },
  ImageBackground_3_3: {
    width: wp("1.875%"),
    height: hp("3.6885245901639343%"),
    top: hp("0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.319444444444457%")
  },
  View_3_12: {
    width: wp("10.277777777777777%"),
    minWidth: wp("10.277777777777777%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.875000000000014%"),
    top: hp("0%")
  },
  View_3_7: {
    width: wp("10.277777777777777%"),
    minWidth: wp("10.277777777777777%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(58, 58, 58, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_3_11: {
    width: wp("9.51388888888889%"),
    minWidth: wp("9.51388888888889%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5555555555555429%"),
    top: hp("0.5464480874316955%")
  },
  View_3_8: {
    width: wp("4.513888888888888%"),
    minWidth: wp("4.513888888888888%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896167%"),
    justifyContent: "flex-start"
  },
  Text_3_8: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3_9: {
    width: wp("2.361111111111111%"),
    height: hp("4.644808743169399%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.152777777777786%")
  },
  View_3_43: {
    width: wp("42.15277777777778%"),
    minWidth: wp("42.15277777777778%"),
    height: hp("9.153005464480875%"),
    minHeight: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3_21: {
    width: wp("34.791666666666664%"),
    minWidth: wp("34.791666666666664%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.3611111111111125%"),
    top: hp("2.3224043715846996%"),
    justifyContent: "flex-start"
  },
  Text_3_21: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3_22: {
    width: wp("5.694444444444445%"),
    minWidth: wp("5.694444444444445%"),
    height: hp("9.153005464480875%"),
    minHeight: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_22_256: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("87.70491803278688%"),
    minHeight: hp("87.70491803278688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27.18579234972678%")
  },
  View_3_57: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("87.70491803278688%"),
    minHeight: hp("87.70491803278688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3_45: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("87.70491803278688%"),
    minHeight: hp("87.70491803278688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_22_253: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_22_251: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.6800000071525574
  },
  View_22_252: {
    width: wp("4.097222222222222%"),
    minWidth: wp("4.097222222222222%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "flex-start"
  },
  Text_22_252: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_55: {
    width: wp("39.02777777777778%"),
    minWidth: wp("39.02777777777778%"),
    height: hp("39.34426229508197%"),
    minHeight: hp("39.34426229508197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.41666666666667%"),
    top: hp("16.93989071038251%")
  },
  View_3_49: {
    width: wp("39.02777777777778%"),
    minWidth: wp("39.02777777777778%"),
    height: hp("39.34426229508197%"),
    minHeight: hp("39.34426229508197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.6600000262260437,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_3_54: {
    width: wp("37.291666666666664%"),
    minWidth: wp("37.291666666666664%"),
    height: hp("31.693989071038253%"),
    minHeight: hp("31.693989071038253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9027777777777715%"),
    top: hp("3.8251366120218577%")
  },
  View_3_47: {
    width: wp("22.77777777777778%"),
    minWidth: wp("22.77777777777778%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13888888888889284%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3_47: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 43,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_50: {
    width: wp("37.291666666666664%"),
    minWidth: wp("37.291666666666664%"),
    minHeight: hp("12.431693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.38251366120219%"),
    justifyContent: "flex-start"
  },
  Text_3_50: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_67: {
    width: wp("12.847222222222221%"),
    minWidth: wp("12.847222222222221%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: hp("24.59016393442623%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_51: {
    flexGrow: 1,
    width: wp("12.847222222222221%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(11, 152, 135, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3_52: {
    flexGrow: 1,
    width: wp("8.055555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3611111111111143%"),
    top: hp("1.3661202185792405%"),
    justifyContent: "flex-start"
  },
  Text_3_52: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_73: {
    width: wp("56.458333333333336%"),
    minWidth: wp("56.458333333333336%"),
    height: hp("31.967213114754102%"),
    minHeight: hp("31.967213114754102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.73611111111111%"),
    top: hp("100.27322404371584%")
  },
  View_3_60: {
    width: wp("56.458333333333336%"),
    minWidth: wp("56.458333333333336%"),
    height: hp("31.967213114754102%"),
    minHeight: hp("31.967213114754102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3_72: {
    width: wp("51.041666666666664%"),
    minWidth: wp("51.041666666666664%"),
    height: hp("23.224043715846996%"),
    minHeight: hp("23.224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333332%"),
    top: hp("5.191256830601105%")
  },
  View_3_71: {
    width: wp("38.47222222222222%"),
    minWidth: wp("38.47222222222222%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3_61: {
    width: wp("9.652777777777779%"),
    minWidth: wp("9.652777777777779%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3_61: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_65: {
    width: wp("7.708333333333334%"),
    minWidth: wp("7.708333333333334%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.486111111111114%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3_65: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_62: {
    width: wp("9.166666666666666%"),
    minWidth: wp("9.166666666666666%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.967213114754102%"),
    justifyContent: "flex-start"
  },
  Text_3_62: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_66: {
    width: wp("7.986111111111111%"),
    minWidth: wp("7.986111111111111%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.486111111111114%"),
    top: hp("6.693989071038246%"),
    justifyContent: "flex-start"
  },
  Text_3_66: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_71: {
    width: wp("11.527777777777779%"),
    minWidth: wp("11.527777777777779%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.5138888888889%"),
    top: hp("16.939890710382514%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_6_68: {
    flexGrow: 1,
    width: wp("11.527777777777779%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(11, 60, 152, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_6_69: {
    flexGrow: 1,
    width: wp("6.944444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111%"),
    top: hp("0.9562841530054556%"),
    justifyContent: "flex-start"
  },
  Text_6_69: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_84: {
    width: wp("1.7361111111111112%"),
    minWidth: wp("1.7361111111111112%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("168.16939890710384%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_6_45: {
    width: wp("88.95833333333333%"),
    minWidth: wp("88.95833333333333%"),
    height: hp("70.08196721311475%"),
    minHeight: hp("70.08196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("140.43715846994536%")
  },
  View_3_76: {
    width: wp("12.708333333333332%"),
    minWidth: wp("12.708333333333332%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.05555555555556%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_3_76: {
    color: "rgba(11, 60, 152, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_44: {
    width: wp("88.95833333333333%"),
    minWidth: wp("88.95833333333333%"),
    height: hp("58.46994535519126%"),
    minHeight: hp("58.46994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.61202185792348%")
  },
  View_3_122: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("58.46994535519126%"),
    minHeight: hp("58.46994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3_77: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    height: hp("58.46994535519126%"),
    minHeight: hp("58.46994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111116%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3_85: {
    width: wp("10.833333333333334%"),
    minWidth: wp("10.833333333333334%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1.9125683060109395%"),
    justifyContent: "flex-start"
  },
  Text_3_85: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_3_121: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("38.66120218579235%"),
    minHeight: hp("38.66120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.885245901639365%")
  },
  View_3_81: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("38.66120218579235%"),
    minHeight: hp("38.66120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(28, 94, 218, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3_97: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    minHeight: hp("31.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111116%"),
    top: hp("3.551912568305994%"),
    justifyContent: "flex-start"
  },
  Text_3_97: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_120: {
    width: wp("9.305555555555555%"),
    minWidth: wp("9.305555555555555%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.763888888888889%"),
    top: hp("51.91256830601094%")
  },
  View_3_119: {
    width: wp("9.305555555555555%"),
    minWidth: wp("9.305555555555555%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3_101: {
    width: wp("6.736111111111111%"),
    minWidth: wp("6.736111111111111%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_3_101: {
    color: "rgba(11, 152, 135, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_3_123: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("58.46994535519126%"),
    minHeight: hp("58.46994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.708333333333336%"),
    top: hp("0%")
  },
  View_3_124: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    height: hp("58.46994535519126%"),
    minHeight: hp("58.46994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111107%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3_125: {
    width: wp("10.277777777777777%"),
    minWidth: wp("10.277777777777777%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.277777777777775%"),
    top: hp("1.9125683060109395%"),
    justifyContent: "flex-start"
  },
  Text_3_125: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_3_126: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("38.66120218579235%"),
    minHeight: hp("38.66120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.885245901639365%")
  },
  View_3_127: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("38.66120218579235%"),
    minHeight: hp("38.66120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 28, 218, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3_128: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    minHeight: hp("31.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111107%"),
    top: hp("3.551912568305994%"),
    justifyContent: "flex-start"
  },
  Text_3_128: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_129: {
    width: wp("9.305555555555555%"),
    minWidth: wp("9.305555555555555%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.763888888888889%"),
    top: hp("51.91256830601094%")
  },
  View_3_130: {
    width: wp("9.305555555555555%"),
    minWidth: wp("9.305555555555555%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3_131: {
    width: wp("6.736111111111111%"),
    minWidth: wp("6.736111111111111%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_3_131: {
    color: "rgba(11, 152, 135, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_3_132: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("58.46994535519126%"),
    minHeight: hp("58.46994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.416666666666664%"),
    top: hp("0%")
  },
  View_3_133: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    height: hp("58.46994535519126%"),
    minHeight: hp("58.46994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111143%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3_134: {
    width: wp("15.347222222222223%"),
    minWidth: wp("15.347222222222223%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777786%"),
    top: hp("1.9125683060109395%"),
    justifyContent: "flex-start"
  },
  Text_3_134: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_3_135: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("38.66120218579235%"),
    minHeight: hp("38.66120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.885245901639365%")
  },
  View_3_136: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("38.66120218579235%"),
    minHeight: hp("38.66120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(14, 191, 95, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3_137: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    minHeight: hp("31.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111143%"),
    top: hp("3.551912568305994%"),
    justifyContent: "flex-start"
  },
  Text_3_137: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_138: {
    width: wp("9.305555555555555%"),
    minWidth: wp("9.305555555555555%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.763888888888886%"),
    top: hp("51.91256830601094%")
  },
  View_3_139: {
    width: wp("9.305555555555555%"),
    minWidth: wp("9.305555555555555%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3_140: {
    width: wp("6.736111111111111%"),
    minWidth: wp("6.736111111111111%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.250000000000007%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_3_140: {
    color: "rgba(11, 152, 135, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_3_141: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("58.46994535519126%"),
    minHeight: hp("58.46994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.125%"),
    top: hp("0%")
  },
  View_3_142: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    height: hp("58.46994535519126%"),
    minHeight: hp("58.46994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111143%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3_143: {
    width: wp("8.26388888888889%"),
    minWidth: wp("8.26388888888889%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.319444444444443%"),
    top: hp("1.9125683060109395%"),
    justifyContent: "flex-start"
  },
  Text_3_143: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_3_144: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("38.66120218579235%"),
    minHeight: hp("38.66120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.885245901639365%")
  },
  View_3_145: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("38.66120218579235%"),
    minHeight: hp("38.66120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(218, 108, 28, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3_146: {
    width: wp("17.36111111111111%"),
    minWidth: wp("17.36111111111111%"),
    minHeight: hp("31.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111143%"),
    top: hp("3.551912568305994%"),
    justifyContent: "flex-start"
  },
  Text_3_146: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_147: {
    width: wp("9.305555555555555%"),
    minWidth: wp("9.305555555555555%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.763888888888886%"),
    top: hp("51.91256830601094%")
  },
  View_3_148: {
    width: wp("9.305555555555555%"),
    minWidth: wp("9.305555555555555%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_3_149: {
    width: wp("6.736111111111111%"),
    minWidth: wp("6.736111111111111%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_3_149: {
    color: "rgba(11, 152, 135, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_17_57: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("57.513661202185794%"),
    minHeight: hp("57.513661202185794%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("218.71584699453553%")
  },
  View_6_48: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("57.513661202185794%"),
    minHeight: hp("57.513661202185794%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_17_66: {
    width: wp("88.81944444444444%"),
    minWidth: wp("88.81944444444444%"),
    height: hp("43.98907103825137%"),
    minHeight: hp("43.98907103825137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.625%"),
    top: hp("6.83060109289616%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_7_7: {
    flexGrow: 1,
    width: wp("29.930555555555554%"),
    height: hp("43.85245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.013888888888886%"),
    top: hp("0%")
  },
  View_7_6: {
    width: wp("29.930555555555554%"),
    height: hp("43.85245901639344%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_6_50: {
    width: wp("29.930555555555554%"),
    height: hp("43.85245901639344%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_7_1: {
    width: wp("4.513888888888888%"),
    height: hp("8.879781420765028%"),
    top: hp("17.21311475409837%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333336%")
  },
  View_7_5: {
    width: wp("29.930555555555554%"),
    height: hp("10.655737704918032%"),
    top: hp("33.19672131147544%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_7_3: {
    width: wp("29.930555555555554%"),
    height: hp("10.655737704918032%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(11, 60, 152, 1)",
    opacity: 0.6000000238418579
  },
  View_7_4: {
    width: wp("18.125%"),
    top: hp("3.142076502732209%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.902777777777779%"),
    justifyContent: "flex-start"
  },
  Text_7_4: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_0: {
    flexGrow: 1,
    width: wp("33.19444444444444%"),
    height: hp("43.85245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_6_49: {
    width: wp("33.19444444444444%"),
    height: hp("43.85245901639344%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_17_35: {
    width: wp("22.22222222222222%"),
    top: hp("4.508196721311492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.291666666666666%"),
    justifyContent: "flex-start"
  },
  Text_17_35: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_59: {
    width: wp("29.583333333333332%"),
    height: hp("14.89071038251366%"),
    top: hp("18.579234972677597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8055555555555554%")
  },
  View_6_57: {
    width: wp("29.583333333333332%"),
    height: hp("14.89071038251366%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(220, 218, 218, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_17_52: {
    width: wp("4.236111111111112%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111107%"),
    justifyContent: "flex-start"
  },
  Text_17_52: {
    color: "rgba(128, 128, 128, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_17_43: {
    width: wp("29.583333333333332%"),
    height: hp("4.781420765027322%"),
    top: hp("11.202185792349752%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7361111111111116%")
  },
  View_17_44: {
    width: wp("29.583333333333332%"),
    height: hp("4.781420765027322%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(220, 218, 218, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_17_45: {
    width: wp("4.861111111111112%"),
    top: hp("1.2295081967212695%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1805555555555545%"),
    justifyContent: "flex-start"
  },
  Text_17_45: {
    color: "rgba(128, 128, 128, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_17_53: {
    width: wp("9.305555555555555%"),
    height: hp("4.644808743169399%"),
    top: hp("36.74863387978141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.083333333333336%")
  },
  View_17_54: {
    width: wp("9.305555555555555%"),
    height: hp("4.644808743169399%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(11, 60, 152, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_17_55: {
    width: wp("4.444444444444445%"),
    top: hp("0.8196721311475699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.361111111111107%"),
    justifyContent: "flex-start"
  },
  Text_17_55: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_17_34: {
    flexGrow: 1,
    width: wp("18.055555555555554%"),
    height: hp("43.98907103825137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.76388888888889%"),
    top: hp("0%")
  },
  View_17_6: {
    width: wp("18.055555555555554%"),
    height: hp("8.333333333333332%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_17_0: {
    width: wp("18.055555555555554%"),
    height: hp("8.333333333333332%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_17_2: {
    width: wp("14.791666666666666%"),
    height: hp("5.46448087431694%"),
    top: hp("1.502732240437183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5972222222222285%")
  },
  ImageBackground_17_3: {
    width: wp("2.7777777777777777%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_17_5: {
    width: wp("10.972222222222221%"),
    top: hp("1.229508196721298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.819444444444443%"),
    justifyContent: "flex-start"
  },
  Text_17_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_7: {
    width: wp("18.055555555555554%"),
    height: hp("8.333333333333332%"),
    top: hp("11.885245901639365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_17_8: {
    width: wp("18.055555555555554%"),
    height: hp("8.333333333333332%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_17_9: {
    width: wp("11.805555555555555%"),
    height: hp("5.46448087431694%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5972222222222285%")
  },
  ImageBackground_17_10: {
    width: wp("2.7777777777777777%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_17_12: {
    width: wp("7.986111111111111%"),
    top: hp("1.229508196721298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.819444444444443%"),
    justifyContent: "flex-start"
  },
  Text_17_12: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_13: {
    width: wp("18.055555555555554%"),
    height: hp("8.333333333333332%"),
    top: hp("23.770491803278702%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_17_14: {
    width: wp("18.055555555555554%"),
    height: hp("8.333333333333332%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_17_15: {
    width: wp("13.333333333333334%"),
    height: hp("4.371584699453552%"),
    top: hp("2.049180327868868%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.875%")
  },
  ImageBackground_17_19: {
    width: wp("2.2222222222222223%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_17_18: {
    width: wp("9.791666666666666%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5416666666666714%"),
    justifyContent: "flex-start"
  },
  Text_17_18: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_21: {
    width: wp("18.055555555555554%"),
    height: hp("8.333333333333332%"),
    top: hp("35.65573770491804%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_17_22: {
    width: wp("18.055555555555554%"),
    height: hp("8.333333333333332%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_17_28: {
    width: wp("12.63888888888889%"),
    height: hp("4.508196721311475%"),
    top: hp("1.9125683060109395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.875%")
  },
  View_17_29: {
    width: wp("9.097222222222221%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5416666666666714%"),
    justifyContent: "flex-start"
  },
  Text_17_29: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_17_30: {
    width: wp("2.2916666666666665%"),
    height: hp("4.508196721311475%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_22_250: {
    width: wp("88.95833333333333%"),
    minWidth: wp("88.95833333333333%"),
    height: hp("42.89617486338798%"),
    minHeight: hp("42.89617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("284.42622950819674%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_17_59: {
    flexGrow: 1,
    width: wp("21.805555555555557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.541666666666664%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_17_59: {
    color: "rgba(11, 60, 152, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_17_77: {
    flexGrow: 1,
    width: wp("30.833333333333336%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.02777777777778%"),
    top: hp("8.196721311475414%")
  },
  View_17_67: {
    width: wp("9.51388888888889%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_17_67: {
    color: "rgba(11, 152, 135, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_76: {
    width: wp("16.805555555555557%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.027777777777771%"),
    justifyContent: "flex-start"
  },
  Text_17_76: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_167: {
    flexGrow: 1,
    width: wp("88.95833333333333%"),
    height: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.852459016393425%")
  },
  View_17_160: {
    width: wp("20.833333333333336%"),
    height: hp("24.043715846994534%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_17_78: {
    width: wp("20.833333333333336%"),
    height: hp("24.043715846994534%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_17_159: {
    width: wp("15.902777777777777%"),
    height: hp("19.12568306010929%"),
    top: hp("0.9562841530054698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4305555555555554%")
  },
  View_17_82: {
    width: wp("15.902777777777777%"),
    top: hp("15.027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_17_82: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_17_86: {
    width: wp("6.944444444444445%"),
    height: hp("13.661202185792352%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.513888888888889%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_17_87: {
    width: wp("5.425347222222222%"),
    height: hp("8.147680564004867%"),
    top: hp("2.7786671789617117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7595486111111107%")
  },
  View_17_88: {
    width: wp("0.4166666666666667%"),
    height: hp("1.2295081967213115%"),
    top: hp("8.743169398907071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9027777777777768%"),
    backgroundColor: "rgba(28, 94, 218, 1)"
  },
  View_17_89: {
    width: wp("0.4861111111111111%"),
    height: hp("3.551912568306011%"),
    top: hp("6.420765027322375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.847222222222223%"),
    backgroundColor: "rgba(28, 94, 218, 1)"
  },
  View_17_90: {
    width: wp("0.4861111111111111%"),
    height: hp("4.918032786885246%"),
    top: hp("5.054644808743149%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.138888888888889%"),
    backgroundColor: "rgba(28, 94, 218, 1)"
  },
  View_17_162: {
    width: wp("20.833333333333336%"),
    height: hp("24.043715846994534%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.708333333333336%")
  },
  View_17_79: {
    width: wp("20.833333333333336%"),
    height: hp("24.043715846994534%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_17_161: {
    width: wp("13.958333333333334%"),
    height: hp("18.71584699453552%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.402777777777775%")
  },
  View_17_83: {
    width: wp("13.958333333333334%"),
    top: hp("14.61748633879779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_17_83: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_17_124: {
    width: wp("6.319444444444445%"),
    height: hp("13.284818722250682%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.81944444444445%")
  },
  View_17_123: {
    width: wp("6.319444444444445%"),
    height: hp("4.781420765027322%"),
    top: hp("8.503397957223342%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_17_97: {
    width: wp("2.2916666666666665%"),
    height: hp("4.508196721311475%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0138888888888857%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_17_98: {
    width: wp("1.9098069932725694%"),
    height: hp("3.7568871440783225%"),
    top: hp("0.37568306010928154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.19092135959201073%")
  },
  View_17_100: {
    width: wp("1.4583333333333333%"),
    height: hp("2.8688524590163933%"),
    top: hp("0.40983606557381336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9722222222222143%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_17_101: {
    width: wp("1.215331819322374%"),
    height: hp("2.3907466012923444%"),
    top: hp("0.2390710382513248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12149386935764284%")
  },
  View_17_112: {
    width: wp("1.4583333333333333%"),
    height: hp("2.8688524590163933%"),
    top: hp("0.40983606557381336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888857%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_17_113: {
    width: wp("1.215331819322374%"),
    height: hp("2.3907466012923444%"),
    top: hp("0.2390710382513248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12149386935764284%")
  },
  View_17_103: {
    width: wp("1.3194444444444444%"),
    height: hp("2.5956284153005464%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_17_104: {
    width: wp("1.0995859569973416%"),
    height: hp("2.163056337116846%"),
    top: hp("0.21630792669913035%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10993109809027857%")
  },
  View_17_115: {
    width: wp("1.3194444444444444%"),
    height: hp("2.5956284153005464%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_17_116: {
    width: wp("1.0995859569973416%"),
    height: hp("2.163056337116846%"),
    top: hp("0.21630792669913035%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.10993109809027146%")
  },
  ImageBackground_17_122: {
    width: wp("5.893696679009332%"),
    height: hp("11.594157401329833%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.19131130642360716%")
  },
  View_17_164: {
    width: wp("20.833333333333336%"),
    height: hp("24.043715846994534%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.416666666666664%")
  },
  View_17_80: {
    width: wp("20.833333333333336%"),
    height: hp("24.043715846994534%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_17_163: {
    width: wp("16.38888888888889%"),
    height: hp("17.759562841530055%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222222222222214%")
  },
  View_17_84: {
    width: wp("16.38888888888889%"),
    top: hp("13.66120218579232%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_17_84: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_17_137: {
    width: wp("5.902777777777778%"),
    height: hp("11.748633879781421%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.208333333333336%")
  },
  ImageBackground_17_127: {
    width: wp("5.208333333333334%"),
    height: hp("10.245901639344263%"),
    top: hp("0.819672131147513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.34722222222222143%")
  },
  ImageBackground_17_125: {
    width: wp("2.7083333333333335%"),
    height: hp("5.327868852459016%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5972222222222214%")
  },
  View_17_136: {
    width: wp("5.902777777777778%"),
    height: hp("11.748633879781421%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_17_128: {
    width: wp("1.1805555555555556%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.5956284153005527%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_17_130: {
    width: wp("1.1805555555555556%"),
    height: hp("2.3224043715846996%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5416666666666643%")
  },
  ImageBackground_17_132: {
    width: wp("1.1805555555555556%"),
    height: hp("2.3224043715846996%"),
    top: hp("6.830601092896188%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222221%")
  },
  ImageBackground_17_134: {
    width: wp("1.1805555555555556%"),
    height: hp("2.3224043715846996%"),
    top: hp("9.42622950819674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1805555555555571%")
  },
  View_17_166: {
    width: wp("20.833333333333336%"),
    height: hp("24.043715846994534%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.125%")
  },
  View_17_81: {
    width: wp("20.833333333333336%"),
    height: hp("24.043715846994534%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_17_165: {
    width: wp("10.902777777777779%"),
    height: hp("16.530054644808743%"),
    top: hp("3.5519125683060224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.930555555555557%")
  },
  View_17_85: {
    width: wp("10.902777777777779%"),
    top: hp("12.431693989070993%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_17_85: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_17_138: {
    width: wp("5.208333333333334%"),
    height: hp("10.245901639344263%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8472222222222143%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_17_139: {
    width: wp("3.2552083333333335%"),
    height: hp("8.96516393442623%"),
    top: hp("0.6403688524590052%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9765625%")
  },
  ImageBackground_17_140: {
    width: wp("1.953125%"),
    height: hp("0.6403688524590164%"),
    top: hp("7.650273224043701%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6276041666666714%")
  },
  ImageBackground_17_143: {
    width: wp("1.3888888888888888%"),
    height: hp("2.73224043715847%"),
    top: hp("3.825136612021822%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333428%")
  },
  View_22_248: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("49.18032786885246%"),
    minHeight: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("335.5191256830601%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_17_168: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_17_170: {
    flexGrow: 1,
    width: wp("18.88888888888889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.55555555555556%"),
    top: hp("6.6939890710382315%"),
    justifyContent: "flex-start"
  },
  Text_17_170: {
    color: "rgba(11, 60, 152, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_17_171: {
    flexGrow: 1,
    width: wp("88.95833333333333%"),
    height: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.486111111111111%"),
    top: hp("18.30601092896171%")
  },
  View_17_172: {
    width: wp("20.833333333333336%"),
    height: hp("24.043715846994534%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_17_173: {
    width: wp("20.833333333333336%"),
    height: hp("24.043715846994534%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_17_175: {
    width: wp("18.26388888888889%"),
    top: hp("6.557377049180332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%"),
    justifyContent: "flex-start"
  },
  Text_17_175: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_17_242: {
    width: wp("11.527777777777779%"),
    height: hp("6.284153005464481%"),
    top: hp("13.797814207650333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.652777777777779%")
  },
  View_17_240: {
    width: wp("11.527777777777779%"),
    height: hp("6.284153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(11, 152, 135, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_17_241: {
    width: wp("9.166666666666666%"),
    top: hp("0.9562841530054698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1805555555555554%"),
    justifyContent: "flex-start"
  },
  Text_17_241: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_181: {
    width: wp("20.833333333333336%"),
    height: hp("24.043715846994534%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.708333333333332%")
  },
  View_17_182: {
    width: wp("20.833333333333336%"),
    height: hp("24.043715846994534%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_17_184: {
    width: wp("16.666666666666664%"),
    top: hp("6.557377049180332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0138888888888893%"),
    justifyContent: "flex-start"
  },
  Text_17_184: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_17_243: {
    width: wp("11.527777777777779%"),
    height: hp("6.284153005464481%"),
    top: hp("13.797814207650333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.652777777777779%")
  },
  View_17_244: {
    width: wp("11.527777777777779%"),
    height: hp("6.284153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(11, 152, 135, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_17_245: {
    width: wp("9.166666666666666%"),
    top: hp("0.9562841530054698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1805555555555571%"),
    justifyContent: "flex-start"
  },
  Text_17_245: {
    color: "rgba(11, 152, 135, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_206: {
    width: wp("20.833333333333336%"),
    height: hp("24.043715846994534%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.41666666666666%")
  },
  View_17_207: {
    width: wp("20.833333333333336%"),
    height: hp("24.043715846994534%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_17_209: {
    width: wp("16.319444444444446%"),
    top: hp("6.557377049180332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2916666666666714%"),
    justifyContent: "flex-start"
  },
  Text_17_209: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_17_252: {
    width: wp("11.527777777777779%"),
    height: hp("6.284153005464481%"),
    top: hp("13.797814207650333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.652777777777786%")
  },
  View_17_253: {
    width: wp("11.527777777777779%"),
    height: hp("6.284153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(11, 152, 135, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_17_254: {
    width: wp("9.166666666666666%"),
    top: hp("0.9562841530054698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.18055555555555%"),
    justifyContent: "flex-start"
  },
  Text_17_254: {
    color: "rgba(11, 152, 135, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_223: {
    width: wp("20.833333333333336%"),
    height: hp("24.043715846994534%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.125%")
  },
  View_17_224: {
    width: wp("20.833333333333336%"),
    height: hp("24.043715846994534%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_17_226: {
    width: wp("17.5%"),
    top: hp("6.557377049180332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5972222222222143%"),
    justifyContent: "flex-start"
  },
  Text_17_226: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_17_255: {
    width: wp("11.527777777777779%"),
    height: hp("6.284153005464481%"),
    top: hp("13.797814207650333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.6527777777777715%")
  },
  View_17_256: {
    width: wp("11.527777777777779%"),
    height: hp("6.284153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(11, 152, 135, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_17_257: {
    width: wp("9.166666666666666%"),
    top: hp("0.9562841530054698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1805555555555571%"),
    justifyContent: "flex-start"
  },
  Text_17_257: {
    color: "rgba(11, 152, 135, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_230: {
    width: wp("88.88890584309895%"),
    minWidth: wp("88.88890584309895%"),
    height: hp("78.68852459016394%"),
    minHeight: hp("78.68852459016394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("392.21311475409834%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_17_260: {
    flexGrow: 1,
    width: wp("16.875%"),
    height: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.041666666666664%"),
    top: hp("0.68306010928967%")
  },
  View_17_261: {
    width: wp("16.875%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_17_261: {
    color: "rgba(11, 60, 152, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_17_547: {
    flexGrow: 1,
    width: wp("88.88888888888889%"),
    height: hp("66.39344262295081%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.29508196721315%")
  },
  View_22_229: {
    width: wp("28.333333333333332%"),
    height: hp("66.39344262295081%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I22_229_17_344: {
    flexGrow: 1,
    width: wp("28.333333333333332%"),
    height: hp("66.39344262295081%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(186, 186, 186, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_I22_229_17_345: {
    flexGrow: 1,
    width: wp("28.333333333333332%"),
    height: hp("47.81420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I22_229_17_346: {
    flexGrow: 1,
    width: wp("14.930555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1805555555555554%"),
    top: hp("49.45355191256823%"),
    justifyContent: "flex-start"
  },
  Text_I22_229_17_346: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I22_229_17_365: {
    flexGrow: 1,
    width: wp("11.527777777777779%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.763888888888888%"),
    top: hp("56.69398907103823%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I22_229_17_365_17_348: {
    flexGrow: 1,
    width: wp("11.527777777777779%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(11, 152, 135, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I22_229_17_365_17_357: {
    flexGrow: 1,
    width: wp("9.51388888888889%"),
    height: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.972222222222225%"),
    top: hp("0.9562841530055266%")
  },
  View_I22_229_17_365_17_349: {
    width: wp("7.430555555555555%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.083333333333332%"),
    justifyContent: "flex-start"
  },
  Text_I22_229_17_365_17_349: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I22_229_17_365_17_353: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0.5464480874315996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I22_229_17_365_17_354: {
    width: wp("1.3888888888888888%"),
    height: hp("2.459016393442623%"),
    top: hp("0.40983606557381336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13888888888888928%")
  },
  View_I22_229_17_366: {
    flexGrow: 1,
    width: wp("11.527777777777779%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111116%"),
    top: hp("56.69398907103823%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I22_229_17_366_17_351: {
    flexGrow: 1,
    width: wp("11.527777777777779%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(11, 152, 135, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I22_229_17_366_17_360: {
    flexGrow: 1,
    width: wp("10.13888888888889%"),
    height: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444446%"),
    top: hp("0.9562841530055266%")
  },
  View_I22_229_17_366_17_352: {
    width: wp("7.569444444444444%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5694444444444438%"),
    justifyContent: "flex-start"
  },
  Text_I22_229_17_366_17_352: {
    color: "rgba(11, 152, 135, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I22_229_17_366_17_358: {
    width: wp("2.2222222222222223%"),
    height: hp("4.371584699453552%"),
    top: hp("0.1366120218578999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_17_496: {
    width: wp("28.333333333333332%"),
    height: hp("66.39344262295081%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.27777777777778%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I17_496_17_344: {
    flexGrow: 1,
    width: wp("28.333333333333332%"),
    height: hp("66.39344262295081%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(186, 186, 186, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_I17_496_17_345: {
    flexGrow: 1,
    width: wp("28.333333333333332%"),
    height: hp("47.81420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I17_496_17_346: {
    flexGrow: 1,
    width: wp("14.930555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1805555555555571%"),
    top: hp("49.45355191256823%"),
    justifyContent: "flex-start"
  },
  Text_I17_496_17_346: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I17_496_17_365: {
    flexGrow: 1,
    width: wp("11.527777777777779%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.763888888888893%"),
    top: hp("56.69398907103823%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I17_496_17_365_17_348: {
    flexGrow: 1,
    width: wp("11.527777777777779%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(11, 152, 135, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I17_496_17_365_17_357: {
    flexGrow: 1,
    width: wp("9.51388888888889%"),
    height: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9722222222222143%"),
    top: hp("0.9562841530055266%")
  },
  View_I17_496_17_365_17_349: {
    width: wp("7.430555555555555%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0833333333333286%"),
    justifyContent: "flex-start"
  },
  Text_I17_496_17_365_17_349: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I17_496_17_365_17_353: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0.5464480874315996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I17_496_17_365_17_354: {
    width: wp("1.3888888888888888%"),
    height: hp("2.459016393442623%"),
    top: hp("0.40983606557381336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13888888888889284%")
  },
  View_I17_496_17_366: {
    flexGrow: 1,
    width: wp("11.527777777777779%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111072%"),
    top: hp("56.69398907103823%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I17_496_17_366_17_351: {
    flexGrow: 1,
    width: wp("11.527777777777779%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(11, 152, 135, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I17_496_17_366_17_360: {
    flexGrow: 1,
    width: wp("10.13888888888889%"),
    height: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444429%"),
    top: hp("0.9562841530055266%")
  },
  View_I17_496_17_366_17_352: {
    width: wp("7.569444444444444%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.56944444444445%"),
    justifyContent: "flex-start"
  },
  Text_I17_496_17_366_17_352: {
    color: "rgba(11, 152, 135, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I17_496_17_366_17_358: {
    width: wp("2.2222222222222223%"),
    height: hp("4.371584699453552%"),
    top: hp("0.1366120218578999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_17_514: {
    width: wp("28.333333333333332%"),
    height: hp("66.39344262295081%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.55555555555556%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I17_514_17_344: {
    flexGrow: 1,
    width: wp("28.333333333333332%"),
    height: hp("66.39344262295081%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(186, 186, 186, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_I17_514_17_345: {
    flexGrow: 1,
    width: wp("28.333333333333332%"),
    height: hp("47.81420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I17_514_17_346: {
    flexGrow: 1,
    width: wp("14.930555555555555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1805555555555571%"),
    top: hp("49.45355191256823%"),
    justifyContent: "flex-start"
  },
  Text_I17_514_17_346: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I17_514_17_365: {
    flexGrow: 1,
    width: wp("11.527777777777779%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.763888888888886%"),
    top: hp("56.69398907103823%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I17_514_17_365_17_348: {
    flexGrow: 1,
    width: wp("11.527777777777779%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(11, 152, 135, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I17_514_17_365_17_357: {
    flexGrow: 1,
    width: wp("9.51388888888889%"),
    height: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9722222222222285%"),
    top: hp("0.9562841530055266%")
  },
  View_I17_514_17_365_17_349: {
    width: wp("7.430555555555555%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0833333333333286%"),
    justifyContent: "flex-start"
  },
  Text_I17_514_17_365_17_349: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I17_514_17_365_17_353: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0.5464480874315996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I17_514_17_365_17_354: {
    width: wp("1.3888888888888888%"),
    height: hp("2.459016393442623%"),
    top: hp("0.40983606557381336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13888888888888573%")
  },
  View_I17_514_17_366: {
    flexGrow: 1,
    width: wp("11.527777777777779%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111143%"),
    top: hp("56.69398907103823%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I17_514_17_366_17_351: {
    flexGrow: 1,
    width: wp("11.527777777777779%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(11, 152, 135, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I17_514_17_366_17_360: {
    flexGrow: 1,
    width: wp("10.13888888888889%"),
    height: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444429%"),
    top: hp("0.9562841530055266%")
  },
  View_I17_514_17_366_17_352: {
    width: wp("7.569444444444444%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.569444444444443%"),
    justifyContent: "flex-start"
  },
  Text_I17_514_17_366_17_352: {
    color: "rgba(11, 152, 135, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I17_514_17_366_17_358: {
    width: wp("2.2222222222222223%"),
    height: hp("4.371584699453552%"),
    top: hp("0.1366120218578999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_17_546: {
    flexGrow: 1,
    width: wp("7.986119058397081%"),
    height: hp("6.216338423431897%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.90278625488281%"),
    top: hp("0%")
  },
  View_17_537: {
    width: wp("3.1599720319112143%"),
    height: hp("6.216338423431897%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.82614305284288%")
  },
  ImageBackground_17_536: {
    width: wp("3.1599720319112143%"),
    height: hp("6.216338423431897%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_17_534: {
    width: wp("2.5854317347208657%"),
    height: hp("5.086095215844327%"),
    top: hp("0.5651255122950829%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2872721354166714%")
  },
  View_17_542: {
    width: wp("3.1599720319112143%"),
    height: hp("6.216338423431897%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_17_543: {
    width: wp("3.1599720319112143%"),
    height: hp("6.216338423431897%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_17_544: {
    width: wp("2.5854317347208657%"),
    height: hp("5.086095215844327%"),
    top: hp("0.5651255122950829%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.28726365831163037%")
  },
  View_22_228: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("63.25136612021858%"),
    minHeight: hp("63.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("479.09836065573774%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_17_549: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("63.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_17_580: {
    flexGrow: 1,
    width: wp("88.81944444444444%"),
    height: hp("63.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.625%"),
    top: hp("0%")
  },
  ImageBackground_17_571: {
    width: wp("41.041666666666664%"),
    height: hp("63.25136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.77777777777778%")
  },
  View_17_579: {
    width: wp("44.93055555555556%"),
    height: hp("49.59016393442623%"),
    top: hp("6.830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_17_552: {
    width: wp("40.90277777777778%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_17_552: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_553: {
    width: wp("44.93055555555556%"),
    top: hp("28.688524590163922%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_17_553: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_550: {
    width: wp("29.791666666666668%"),
    height: hp("4.781420765027322%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_17_551: {
    width: wp("29.791666666666668%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_17_551: {
    color: "rgba(11, 60, 152, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_17_578: {
    width: wp("14.583333333333334%"),
    height: hp("7.103825136612022%"),
    top: hp("42.4863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_17_576: {
    width: wp("14.583333333333334%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(11, 152, 135, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_17_577: {
    width: wp("10.694444444444445%"),
    top: hp("1.36612021857934%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9444444444444438%"),
    justifyContent: "flex-start"
  },
  Text_17_577: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_255: {
    width: wp("85.48611111111111%"),
    minWidth: wp("85.48611111111111%"),
    height: hp("28.278688524590162%"),
    minHeight: hp("28.278688524590162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("550.5464480874317%")
  },
  View_22_82: {
    width: wp("24.930555555555557%"),
    minWidth: wp("24.930555555555557%"),
    height: hp("28.278688524590162%"),
    minHeight: hp("28.278688524590162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_22_54: {
    width: wp("21.180555555555554%"),
    minWidth: wp("21.180555555555554%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444464%"),
    top: hp("0%")
  },
  View_22_55: {
    width: wp("21.180555555555554%"),
    minWidth: wp("21.180555555555554%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_22_55: {
    color: "rgba(11, 60, 152, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_22_64: {
    width: wp("24.930555555555557%"),
    minWidth: wp("24.930555555555557%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.5136612021857445%"),
    justifyContent: "flex-start"
  },
  Text_22_64: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_88: {
    width: wp("24.930555555555557%"),
    minWidth: wp("24.930555555555557%"),
    height: hp("28.278688524590162%"),
    minHeight: hp("28.278688524590162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.27777777777778%"),
    top: hp("0%")
  },
  View_22_89: {
    width: wp("6.319444444444445%"),
    minWidth: wp("6.319444444444445%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: hp("0%")
  },
  View_22_90: {
    width: wp("6.319444444444445%"),
    minWidth: wp("6.319444444444445%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_22_90: {
    color: "rgba(11, 60, 152, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_22_91: {
    width: wp("24.930555555555557%"),
    minWidth: wp("24.930555555555557%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.5136612021857445%"),
    justifyContent: "flex-start"
  },
  Text_22_91: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_92: {
    width: wp("24.930555555555557%"),
    minWidth: wp("24.930555555555557%"),
    height: hp("28.278688524590162%"),
    minHeight: hp("28.278688524590162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.55555555555556%"),
    top: hp("0%")
  },
  View_22_93: {
    width: wp("15.208333333333332%"),
    minWidth: wp("15.208333333333332%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444287%"),
    top: hp("0%")
  },
  View_22_94: {
    width: wp("15.208333333333332%"),
    minWidth: wp("15.208333333333332%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_22_94: {
    color: "rgba(11, 60, 152, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_22_95: {
    width: wp("24.930555555555557%"),
    minWidth: wp("24.930555555555557%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.5136612021857445%"),
    justifyContent: "flex-start"
  },
  Text_22_95: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_105: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("28.551912568306008%"),
    minHeight: hp("28.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("587.0218579234972%")
  },
  View_22_97: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("28.551912568306008%"),
    minHeight: hp("28.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(28, 94, 218, 1)"
  },
  View_22_104: {
    width: wp("91.11111111111111%"),
    minWidth: wp("91.11111111111111%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%"),
    top: hp("10.10928961748641%"),
    justifyContent: "flex-start"
  },
  Text_22_104: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 34,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_254: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("75.68306010928961%"),
    minHeight: hp("75.68306010928961%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("623.7704918032787%")
  },
  View_22_206: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("62.431693989071036%"),
    minHeight: hp("62.431693989071036%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_22_106: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("62.431693989071036%"),
    minHeight: hp("62.431693989071036%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(237, 237, 237, 1)"
  },
  View_22_249: {
    width: wp("85.97222222222223%"),
    minWidth: wp("85.97222222222223%"),
    height: hp("48.77049180327869%"),
    minHeight: hp("48.77049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.013888888888889%"),
    top: hp("6.830601092896245%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_22_126: {
    flexGrow: 1,
    width: wp("29.583333333333332%"),
    height: hp("45.03274302665002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.388888888888886%"),
    top: hp("0%")
  },
  View_22_138: {
    width: wp("29.583333333333332%"),
    height: hp("20.76502732240437%"),
    top: hp("9.42622950819657%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_22_117: {
    width: wp("29.583333333333332%"),
    height: hp("5.601092896174864%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_22_118: {
    width: wp("29.583333333333332%"),
    height: hp("5.601092896174864%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(220, 218, 218, 1)",
    borderWidth: 1
  },
  View_22_119: {
    width: wp("2.7777777777777777%"),
    top: hp("1.36612021857934%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333428%"),
    justifyContent: "flex-start"
  },
  Text_22_119: {
    color: "rgba(128, 128, 128, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_22_123: {
    width: wp("29.583333333333332%"),
    height: hp("5.601092896174864%"),
    top: hp("8.060109289617571%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_22_124: {
    width: wp("29.583333333333332%"),
    height: hp("5.601092896174864%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(220, 218, 218, 1)",
    borderWidth: 1
  },
  View_22_125: {
    width: wp("3.194444444444444%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8333333333333428%"),
    justifyContent: "flex-start"
  },
  Text_22_125: {
    color: "rgba(128, 128, 128, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_22_120: {
    width: wp("9.305555555555555%"),
    height: hp("4.644808743169399%"),
    top: hp("16.12021857923503%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.277777777777786%")
  },
  View_22_121: {
    width: wp("9.305555555555555%"),
    height: hp("4.644808743169399%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(11, 60, 152, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_22_122: {
    width: wp("4.444444444444445%"),
    top: hp("0.819672131147513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3611111111111143%"),
    justifyContent: "flex-start"
  },
  Text_22_122: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_22_139: {
    width: wp("29.583333333333332%"),
    top: hp("33.33333333333326%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_22_139: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_108: {
    width: wp("18.541666666666668%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_22_108: {
    color: "rgba(11, 60, 152, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_259: {
    width: wp("19.583333333333332%"),
    minWidth: wp("19.583333333333332%"),
    height: hp("4.185748230564138%"),
    minHeight: hp("4.185748230564138%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40.846994535519%")
  },
  View_22_258: {
    width: wp("6.875000000000001%"),
    top: hp("0.5464480874318269%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_22_258: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "justify",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_136: {
    width: wp("12.222222222222221%"),
    height: hp("4.185748230564138%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.361111111111114%")
  },
  ImageBackground_22_128: {
    width: wp("2.1277553505367703%"),
    height: hp("4.185748230564138%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_22_130: {
    width: wp("2.1277553505367703%"),
    height: hp("4.185748230564138%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3648257785373232%")
  },
  ImageBackground_22_132: {
    width: wp("2.1277553505367703%"),
    height: hp("4.185748230564138%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.72964307996962%")
  },
  ImageBackground_22_134: {
    width: wp("2.1277553505367703%"),
    height: hp("4.185748230564138%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.094468858506957%")
  },
  View_22_170: {
    flexGrow: 1,
    width: wp("13.88888888888889%"),
    height: hp("48.77049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.069444444444446%"),
    top: hp("0%")
  },
  View_22_204: {
    width: wp("13.88888888888889%"),
    height: hp("48.77049180327869%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_22_182: {
    width: wp("8.333333333333332%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_22_182: {
    color: "rgba(11, 60, 152, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_203: {
    width: wp("13.88888888888889%"),
    height: hp("41.39344262295082%"),
    top: hp("7.377049180327845%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_22_192: {
    width: wp("10.347222222222221%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_22_192: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_193: {
    width: wp("5.763888888888889%"),
    top: hp("4.781420765027292%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_22_193: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_194: {
    width: wp("11.319444444444445%"),
    top: hp("9.562841530054698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_22_194: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_195: {
    width: wp("13.88888888888889%"),
    top: hp("14.344262295081876%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_22_195: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_196: {
    width: wp("7.986111111111111%"),
    top: hp("19.12568306010928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_22_196: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_198: {
    width: wp("8.472222222222223%"),
    top: hp("23.907103825136574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_22_198: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_199: {
    width: wp("5.416666666666667%"),
    top: hp("28.68852459016398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_22_199: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_200: {
    width: wp("6.527777777777779%"),
    top: hp("33.46994535519116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_22_200: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_201: {
    width: wp("5.277777777777778%"),
    top: hp("38.25136612021856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_22_201: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_169: {
    flexGrow: 1,
    width: wp("17.63888888888889%"),
    height: hp("41.2568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_22_163: {
    width: wp("17.63888888888889%"),
    height: hp("11.33879781420765%"),
    top: hp("29.918032786885192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_22_154: {
    width: wp("17.63888888888889%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_22_154: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_162: {
    width: wp("12.847222222222221%"),
    height: hp("7.103825136612022%"),
    top: hp("4.234972677595579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4305555555555554%")
  },
  View_22_159: {
    width: wp("12.847222222222221%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(11, 152, 135, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_22_161: {
    width: wp("9.722222222222223%"),
    height: hp("4.508196721311475%"),
    top: hp("1.2295081967213264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5277777777777768%")
  },
  View_22_160: {
    width: wp("7.222222222222221%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    justifyContent: "flex-start"
  },
  Text_22_160: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_22_151: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0.6830601092897268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_22_150: {
    width: wp("8.055555555555555%"),
    height: hp("24.18032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.791666666666666%")
  },
  ImageBackground_22_148: {
    width: wp("8.055555555555555%"),
    height: hp("15.846994535519126%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_22_149: {
    width: wp("7.222222222222221%"),
    top: hp("19.39890710382508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4166666666666661%"),
    justifyContent: "flex-start"
  },
  Text_22_149: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_222: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13.25136612021858%"),
    minHeight: hp("13.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("62.43169398907105%")
  },
  View_22_207: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13.25136612021858%"),
    minHeight: hp("13.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(11, 152, 135, 1)"
  },
  View_22_227: {
    width: wp("20.90277777777778%"),
    minWidth: wp("20.90277777777778%"),
    height: hp("8.60655737704918%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.513888888888886%"),
    top: hp("2.322404371584639%")
  },
  View_22_208: {
    width: wp("15.208333333333332%"),
    minWidth: wp("15.208333333333332%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8472222222222214%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_22_208: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_226: {
    width: wp("20.90277777777778%"),
    minWidth: wp("20.90277777777778%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.464480874317019%"),
    justifyContent: "flex-start"
  },
  Text_22_226: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_221: {
    width: wp("8.333333333333332%"),
    minWidth: wp("8.333333333333332%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.29166666666667%"),
    top: hp("680.0546448087432%")
  },
  ImageBackground_22_209: {
    width: wp("8.333333333333332%"),
    minWidth: wp("8.333333333333332%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_22_220: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6666666666666572%"),
    top: hp("2.8688524590163524%")
  },
  ImageBackground_22_210: {
    width: wp("4.027777777777778%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.48611111111111427%")
  },
  View_22_212: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759558%"),
    justifyContent: "flex-start"
  },
  Text_22_212: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
