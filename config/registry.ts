import type { Registry } from "./types"

export const registry: Registry = {
  apis: {
    SYNO: {
      apis: {
        API: {
          apis: {
            Auth: {
              apis: {
                Type: {
                  methods: {
                    get: {
                      1: {
                        params: {
                          type: "object",
                          optional: true,
                          items: {
                            account: { type: "string", optional: true }
                          }
                        },
                        response: {
                          type: "array",
                          items: {
                            type: "object",
                            items: {
                              type: { type: "string" }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                UIConfig: {
                  methods: {
                    get: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            cssPath: {
                              type: "string",
                              optional: true
                            },
                            jsPath: { type: "string" },
                            texts: {
                              type: "object",
                              additionalProperties: {
                                type: "object",
                                items: {
                                  app: {
                                    type: "object",
                                    items: {
                                      description: { type: "string" },
                                      displayname: { type: "string" },
                                      warning_remove_2fa_device: { type: "string" },
                                      warning_remove_2step_device: { type: "string" },
                                      warning_remove_the_last_2fa_device: { type: "string" },
                                      warning_remove_the_last_2step_device: { type: "string" }
                                    }
                                  },
                                  authenticator: {
                                    type: "object",
                                    items: {
                                      "2fa_authenticator_desc": { type: "string" },
                                      "2fa_desc": { type: "string" },
                                      "2fa_login_flow": { type: "string" },
                                      "2fa_note_scan_qr_code": { type: "string" },
                                      "2fa_setup_finish_desc": { type: "string" },
                                      "2fa_with_authenticator": { type: "string" },
                                      app_version: { type: "string" },
                                      approve_sign_in: { type: "string" },
                                      authenticator_desc: { type: "string" },
                                      enforce_2fa_authenticator_desc: { type: "string" },
                                      install_authenticator: { type: "string" },
                                      install_authenticator_desc: { type: "string" },
                                      login_desc: { type: "string" },
                                      login_flow: { type: "string" },
                                      login_page_desc: { type: "string" },
                                      login_request_resend: { type: "string" },
                                      login_request_resend_button: { type: "string" },
                                      management_empty_text: { type: "string" },
                                      mobile_wait_too_long_info: { type: "string" },
                                      model: { type: "string" },
                                      note_scan_qr_code: { type: "string" },
                                      os_version: { type: "string" },
                                      private_ip_error_msg_admin: { type: "string" },
                                      private_ip_error_msg_admin_with_params: { type: "string" },
                                      private_ip_error_msg_user: { type: "string" },
                                      receive_sign_in_request: { type: "string" },
                                      recv_sign_in_requests: { type: "string" },
                                      register_unavailable_title: { type: "string" },
                                      request_denied: { type: "string" },
                                      request_denied_desc: { type: "string" },
                                      request_sent_desc: { type: "string" },
                                      request_sent_num_desc: { type: "string" },
                                      request_timeout: { type: "string" },
                                      request_timeout_desc: { type: "string" },
                                      scan_qr_code: { type: "string" },
                                      setup_authenticator: { type: "string" },
                                      setup_authenticator_desc: { type: "string" },
                                      sign_in_method: { type: "string" },
                                      sign_in_with_authenticator: { type: "string" },
                                      tap_to_continue: { type: "string" },
                                      try_again: { type: "string" }
                                    }
                                  },
                                  common: {
                                    type: "object",
                                    items: {
                                      "2fa_off": { type: "string" },
                                      "2fa_on": { type: "string" },
                                      "2fa_package_broken_msg": { type: "string" },
                                      add_time: { type: "string" },
                                      continue: { type: "string" },
                                      last_used_time: { type: "string" },
                                      package_broken_msg: { type: "string" },
                                      passwordless_off: { type: "string" },
                                      passwordless_on: { type: "string" },
                                      passwordless_signin: { type: "string" },
                                      setup_success: { type: "string" },
                                      turn_off: { type: "string" }
                                    }
                                  },
                                  error: {
                                    type: "object",
                                    items: {
                                      invalid_device_name: { type: "string" },
                                      invalid_domain: { type: "string" },
                                      invalid_domain_user: { type: "string" },
                                      other_ways_desc: { type: "string" },
                                      register_again: { type: "string" },
                                      something_wrong: { type: "string" }
                                    }
                                  },
                                  fido: {
                                    type: "object",
                                    items: {
                                      complete_login: { type: "string" },
                                      follow_steps: { type: "string" },
                                      hardware_security_key: { type: "string" },
                                      keyname_collision: { type: "string" },
                                      login_page_desc: { type: "string" },
                                      mac_touch_id_setup_desc: { type: "string" },
                                      management_empty_text: { type: "string" },
                                      method_touch_id: { type: "string" },
                                      method_usb_key: { type: "string" },
                                      method_windows_hello: { type: "string" },
                                      name_your_key: { type: "string" },
                                      platform_key_not_setup_desc: { type: "string" },
                                      reg_wizard_usb_key_title: { type: "string" },
                                      register_duplicate_key: { type: "string" },
                                      security_key_registered: { type: "string" },
                                      security_key_registered_desc: { type: "string" },
                                      securiy_key_registered: { type: "string" },
                                      select_type: { type: "string" },
                                      set_up_ddns: { type: "string" },
                                      set_up_ddns_desc: { type: "string" },
                                      touch_id_2fa_desc: { type: "string" },
                                      touch_id_desc: { type: "string" },
                                      touch_id_disabled: { type: "string" },
                                      touch_id_login_desc: { type: "string" },
                                      touch_id_login_desc_with_otp: { type: "string" },
                                      touch_id_not_set_up_desc: { type: "string" },
                                      touch_id_not_set_up_title: { type: "string" },
                                      touch_id_reg: { type: "string" },
                                      touch_id_setup_desc: { type: "string" },
                                      type_touch_id: { type: "string" },
                                      type_usb_key: { type: "string" },
                                      type_windows_hello: { type: "string" },
                                      usb_key_2fa_desc: { type: "string" },
                                      usb_key_desc: { type: "string" },
                                      usb_key_login_desc: { type: "string" },
                                      usb_key_login_desc_with_otp: { type: "string" },
                                      usb_key_name: { type: "string" },
                                      usb_key_name_desc: { type: "string" },
                                      usb_key_reg: { type: "string" },
                                      usb_key_reg_desc: { type: "string" },
                                      use_registered_hostname_desc: { type: "string" },
                                      use_registered_hostname_desc_with_params: { type: "string" },
                                      use_valid_domain_title: { type: "string" },
                                      verifying: { type: "string" },
                                      windows_hello_2fa_desc: { type: "string" },
                                      windows_hello_desc: { type: "string" },
                                      windows_hello_disabled: { type: "string" },
                                      windows_hello_login_desc: { type: "string" },
                                      windows_hello_login_desc_with_otp: { type: "string" },
                                      windows_hello_not_set_up_desc: { type: "string" },
                                      windows_hello_not_set_up_title: { type: "string" },
                                      windows_hello_reg: { type: "string" },
                                      windows_hello_setup_desc: { type: "string" }
                                    }
                                  },
                                  inherit: {
                                    type: "object",
                                    items: {
                                      "2fa_desc": { type: "string" },
                                      "2fa_no": { type: "string" },
                                      "2fa_note": { type: "string" },
                                      "2fa_title": { type: "string" },
                                      "2fa_yes": { type: "string" },
                                      inherit_to_2fa_desc: { type: "string" },
                                      inherit_to_2fa_title: { type: "string" },
                                      inherit_to_passwordless_desc: { type: "string" },
                                      inherit_to_passwordless_title: { type: "string" },
                                      passwordless_desc: { type: "string" },
                                      passwordless_no: { type: "string" },
                                      passwordless_note: { type: "string" },
                                      passwordless_title: { type: "string" },
                                      passwordless_yes: { type: "string" }
                                    }
                                  },
                                  management: {
                                    type: "object",
                                    items: {
                                      "2fa_desc": { type: "string" },
                                      "2fa_settings_activated_time": { type: "string" },
                                      "2fa_settings_general_desc": { type: "string" },
                                      alert_disable_2fa: { type: "string" },
                                      alert_disable_2fa_title: { type: "string" },
                                      alert_disable_passwordless: { type: "string" },
                                      alert_disable_passwordless_title: { type: "string" },
                                      chagne_mobile_device_title: { type: "string" },
                                      change_mobile_device_desc: { type: "string" },
                                      change_mobile_device_title: { type: "string" },
                                      device_name: { type: "string" },
                                      edit_device_name: { type: "string" },
                                      enforce_2fa_by_admin: { type: "string" },
                                      enforce_2fa_remove_last_signin: { type: "string" },
                                      passwordless_desc: { type: "string" },
                                      passwordless_settings_activated_time: { type: "string" },
                                      passwordless_settings_general_desc: { type: "string" },
                                      remove_a_2fa_signin: { type: "string" },
                                      remove_a_passwordless_signin: { type: "string" },
                                      remove_last_2fa_signin: { type: "string" },
                                      remove_last_2fa_signin_and_otp_disabled: { type: "string" },
                                      remove_last_passwordless_signin: { type: "string" },
                                      reset_current_mobile_device: { type: "string" },
                                      trusted_device_desc: { type: "string" },
                                      unavailable_sa_desc_admin: { type: "string" },
                                      unavailable_sa_desc_user: { type: "string" }
                                    }
                                  },
                                  otp: {
                                    type: "object",
                                    items: {
                                      "2fa_summary_desc": { type: "string" },
                                      "2fa_summary_note": { type: "string" },
                                      backup_email_admin_tip: { type: "string" },
                                      backup_email_desc: { type: "string" },
                                      backup_email_note_desc: { type: "string" },
                                      backup_email_user_tip: { type: "string" },
                                      download_qrcode_note: { type: "string" },
                                      email_service_provider: { type: "string" },
                                      management_empty_text: { type: "string" },
                                      no_service_provider_or_backup_email: { type: "string" },
                                      note_desc: { type: "string" },
                                      otp_backup_mail_settings_desc: { type: "string" },
                                      otp_wizard_backup_method_welcome_desc: { type: "string" },
                                      otp_wizard_backup_method_welcome_note: { type: "string" },
                                      otp_wizard_welcome_desc: { type: "string" },
                                      otp_wizard_welcome_note: { type: "string" },
                                      reomte_admin_email_update_info: { type: "string" },
                                      reomte_user_email_update_info: { type: "string" },
                                      skip_backup_email_warning_msg: { type: "string" },
                                      skip_warning_msg: { type: "string" },
                                      wizard_mail_step_no_sender_desc: { type: "string" }
                                    }
                                  },
                                  personal_setting: {
                                    type: "object",
                                    items: {
                                      "2fa_desc": { type: "string" },
                                      first_signin_step: { type: "string" },
                                      first_signin_step_desc: { type: "string" },
                                      no_sa_signin_method_desc: { type: "string" },
                                      passwordless_signin_desc: { type: "string" },
                                      second_signin_step: { type: "string" },
                                      signin_method_desc: { type: "string" }
                                    }
                                  },
                                  wizard: {
                                    type: "object",
                                    items: {
                                      "2fa_desc": { type: "string" },
                                      "2fa_has_been_turned_on": { type: "string" },
                                      "2fa_title": { type: "string" },
                                      add_alternative_signin_method: { type: "string" },
                                      add_new_signin_methods: { type: "string" },
                                      confirm_rollback: { type: "string" },
                                      confirm_rollback_title: { type: "string" },
                                      enforce_2fa_headline: { type: "string" },
                                      enforce_2fa_welcome_desc1: { type: "string" },
                                      enforce_2fa_welcome_desc2: { type: "string" },
                                      hardware_security_key_desc: { type: "string" },
                                      leave_desc: { type: "string" },
                                      passwordless_desc: { type: "string" },
                                      passwordless_title: { type: "string" },
                                      set_backup_2fa_content: { type: "string" },
                                      set_backup_2fa_desc: { type: "string" }
                                    }
                                  }
                                }
                              }
                            },
                            version: { type: "string" }
                          }
                        }
                      }
                    }
                  }
                }
              },
              methods: {
                login: {
                  7: {
                    setSession: {
                      sid: { key: "sid" },
                      synotoken: { key: "synotoken" }
                    },
                    defaultParams: {
                      format: "cookie",
                      enable_syno_token: "yes"
                    },
                    params: {
                      type: "object",
                      items: {
                        account: { type: "string" },
                        passwd: { type: "string" },
                        otp_code: {
                          type: "string",
                          optional: true
                        }
                      }
                    },
                    response: {
                      type: "object",
                      items: {
                        account: { type: "string" },
                        device_id: { type: "string" },
                        sid: { type: "string" },
                        is_portal_port: { type: "boolean" },
                        synotoken: { type: "string" }
                      }
                    }
                  }
                },
                logout: {
                  1: {
                    respond: false,
                    setSession: {
                      sid: { value: null },
                      synotoken: { value: null }
                    }
                  }
                }
              }
            },
            Encryption: {
              methods: {
                getinfo: {
                  1: {
                    response: {
                      type: "object",
                      items: {
                        cipherkey: { type: "string" },
                        ciphertoken: { type: "string" },
                        public_key: { type: "string" },
                        server_time: { type: "float" }
                      }
                    }
                  }
                }
              }
            },
            Info: {
              methods: {
                query: {
                  1: {
                    params: {
                      type: "object",
                      optional: true,
                      items: {
                        query: {
                          type: "string",
                          optional: true,
                          description: 'API names, separated by a comma "," or use "all" to get all supported APIs'
                        }
                      }
                    },
                    response: {
                      type: "object",
                      additionalProperties: {
                        type: "object",
                        items: {
                          path: { type: "string" },
                          minVersion: { type: "integer" },
                          maxVersion: { type: "integer" },
                          requestFormat: { type: "string" }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        ActiveInsight: {
          apis: {
            CompleteCollection: {
              methods: {
                get: {
                  1: {
                    response: {
                      type: "object",
                      items: {
                        enabled: { type: "boolean" }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        Auth: {
          apis: {
            RescueEmail: {
              methods: {
                get: {
                  1: {
                    response: {
                      type: "object",
                      items: {
                        verified: { type: "boolean" }
                      }
                    }
                  }
                },
                set: {
                  1: {
                    respond: false
                  }
                }
              }
            }
          }
        },
        Backup: {
          apis: {
            Config: {
              apis: {
                AutoBackup: {
                  methods: {
                    get: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            enable: { type: "boolean" },
                            enc_method: { type: "string" },
                            last_status: { type: "string" },
                            myds_account: { type: "string" },
                            pwd: { type: "string" }
                          }
                        }
                      }
                    },
                    status: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            last_status: { type: "string" }
                          }
                        }
                      }
                    }
                  }
                },
                Backup: {
                  methods: {
                    list: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            services: {
                              type: "array",
                              items: {
                                type: "object",
                                items: {
                                  field: { type: "string" },
                                  id: { type: "string" },
                                  text: { type: "string" }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    start: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            task_id: { type: "string" }
                          }
                        }
                      }
                    },
                    status: {
                      1: {
                        params: {
                          type: "object",
                          items: {
                            task_id: { type: "string" }
                          }
                        },
                        response: {
                          type: "object",
                          items: {
                            finish: { type: "boolean" },
                            task_id: { type: "string" }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        CloudSync: {
          methods: {
            list_conn: {
              1: {
                params: {
                  type: "object",
                  optional: true,
                  items: {
                    is_tray: { type: "boolean", optional: true },
                    group_by: { type: "enum", items: ["group_by_user"], optional: true }
                  }
                },
                response: {
                  type: "object",
                  items: {
                    conn: {
                      type: "array",
                      items: { type: "unknown" }
                    },
                    is_admin_mode: { type: "boolean" },
                    is_pause: { type: "boolean" },
                    notification: {
                      type: "options",
                      items: [
                        {
                          type: "object",
                          items: {
                            file_count: { type: "integer" }
                          }
                        },
                        { type: "null" }
                      ]
                    },
                    total: { type: "integer" },
                    tray_status: {
                      type: "enum",
                      items: ["suspended"]
                    }
                  }
                }
              }
            },
            get_available_clouds: {
              1: {
                response: {
                  type: "object",
                  items: {
                    available_clouds: {
                      type: "array",
                      items: { type: "unknown" }
                    }
                  }
                }
              }
            },
            get_config: {
              1: {
                response: {
                  type: "object",
                  items: {
                    admin_mode: { type: "enum", items: ["enable"] },
                    log_count: { type: "integer" },
                    repo_vol_path: { type: "string" },
                    sync_mode: { type: "boolean" },
                    volume_count: { type: "integer" },
                    volume_list: {
                      type: "array",
                      items: {
                        type: "object",
                        items: {
                          desc: { type: "string" },
                          display: { type: "string" },
                          mount_point: { type: "string" },
                          size_free: { type: "string" },
                          size_total: { type: "string" },
                          value: { type: "string" },
                          vol_desc: { type: "string" }
                        }
                      }
                    },
                    worker_count: { type: "integer" }
                  }
                }
              }
            }
          }
        },
        Core: {
          apis: {
            AppNotify: {
              methods: {
                view: {
                  1: {
                    respond: false,
                    params: {
                      type: "object",
                      optional: true,
                      items: {
                        app: { type: "string", optional: true }
                      }
                    }
                  }
                }
              }
            },
            AppPortal: {
              apis: {
                AccessControl: {
                  methods: {
                    list: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            entries: { type: "array", items: { type: "unknown" } }
                          }
                        }
                      }
                    }
                  }
                },
                Config: {
                  methods: {
                    get: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            show_titlebar: { type: "boolean" }
                          }
                        }
                      }
                    },
                    set: {
                      1: {
                        respond: false,
                        params: {
                          type: "object",
                          optional: true,
                          items: {
                            show_titlebar: { type: "boolean", optional: true }
                          }
                        }
                      }
                    }
                  }
                },
                ReverseProxy: {
                  methods: {
                    list: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            entries: { type: "array", items: { type: "unknown" } }
                          }
                        }
                      }
                    }
                  }
                }
              },
              methods: {
                list: {
                  2: {
                    params: {
                      type: "object",
                      optional: true,
                      items: {
                        additional: {
                          type: "array",
                          optional: true,
                          items: { type: "enum", items: ["default_setting"] }
                        }
                      }
                    },
                    response: {
                      type: "object",
                      items: {
                        portal: {
                          type: "array",
                          items: {
                            type: "object",
                            items: {
                              additional: {
                                type: "object",
                                optional: true,
                                items: {
                                  default_setting: {
                                    type: "object",
                                    optional: true,
                                    items: {
                                      alias: { type: "string" },
                                      fqdn: { type: "string" },
                                      hsts: { type: "boolean" },
                                      http_port: { type: "integer" },
                                      https_port: { type: "integer" }
                                    }
                                  }
                                }
                              },
                              display_name: { type: "string" },
                              enable_redirect: { type: "boolean" },
                              id: { type: "string" }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        Entry: {
          apis: {
            Request: {
              methods: {
                request: {
                  1: {
                    params: {
                      type: "object",
                      items: {
                        stop_when_error: { type: "boolean" },
                        mode: { type: "enum", items: ["sequential"] },
                        compound: {
                          type: "array",
                          items: {
                            type: "object",
                            items: {
                              api: { type: "string" },
                              method: { type: "string" },
                              version: { type: "integer" }
                            },
                            additionalProperties: {
                              type: "options",
                              items: [{ type: "string" }, { type: "integer" }, { type: "boolean" }]
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        FileStation: {
          apis: {
            Favorite: {
              methods: {
                list: {
                  2: {
                    params: {
                      type: "object",
                      optional: true,
                      items: {
                        filetype: { type: "enum", items: ["dir"], optional: true },
                        sort_by: { type: "enum", items: ["name"], optional: true },
                        check_dir: { type: "boolean", optional: true },
                        additional: {
                          type: "array",
                          items: {
                            type: "enum",
                            items: [
                              "real_path",
                              "owner",
                              "time",
                              "perm",
                              "mount_point_type",
                              "sync_share",
                              "volume_status",
                              "indexed",
                              "hybrid_share",
                              "worm_share",
                              "tiering_xattr"
                            ]
                          },
                          optional: true
                        },
                        enum_cluster: { type: "boolean", optional: true },
                        node: { type: "string", optional: true }
                      }
                    },
                    response: {
                      type: "object",
                      items: {
                        favorites: {
                          type: "array",
                          items: {
                            type: "object",
                            items: {
                              path: { type: "string" },
                              name: { type: "string" },
                              status: { type: "enum", items: ["valid", "broken"] }
                            }
                          }
                        },
                        offset: { type: "integer" },
                        total: { type: "integer" }
                      }
                    }
                  }
                }
              }
            },
            Info: {
              methods: {
                get: {
                  1: {
                    response: {
                      type: "object",
                      items: {
                        allow_heic_original: { type: "boolean" },
                        allow_normal_disable_html: { type: "boolean" },
                        enable_list_usergrp: { type: "boolean" },
                        enable_send_email_attachment: { type: "boolean" },
                        enable_view_google: { type: "boolean" },
                        enable_view_microsoft: { type: "boolean" },
                        hostname: { type: "string" },
                        is_manager: { type: "boolean" },
                        items: {
                          type: "array",
                          items: {
                            type: "object",
                            items: {
                              gid: { type: "integer" }
                            }
                          }
                        },
                        support_file_request: { type: "boolean" },
                        support_sharing: { type: "boolean" },
                        support_vfs: { type: "boolean" },
                        support_virtual: {
                          type: "object",
                          items: {
                            enable_iso_mount: { type: "boolean" },
                            enable_remote_mount: { type: "boolean" }
                          }
                        },
                        support_virtual_protocol: { type: "string" },
                        system_codepage: { type: "string" },
                        uid: { type: "integer" }
                      }
                    }
                  }
                }
              }
            },
            List: {
              methods: {
                list_share: {
                  2: {
                    params: {
                      type: "object",
                      optional: true,
                      items: {
                        filetype: { type: "enum", items: ["dir"], optional: true },
                        sort_by: { type: "enum", items: ["name"], optional: true },
                        check_dir: { type: "boolean", optional: true },
                        additional: {
                          type: "array",
                          items: {
                            type: "enum",
                            items: [
                              "real_path",
                              "owner",
                              "time",
                              "perm",
                              "mount_point_type",
                              "sync_share",
                              "volume_status",
                              "indexed",
                              "hybrid_share",
                              "worm_share",
                              "tiering_xattr"
                            ]
                          }
                        },
                        enum_cluster: { type: "boolean", optional: true },
                        node: { type: "string", optional: true }
                      }
                    },
                    response: {
                      type: "object",
                      items: {
                        offset: { type: "integer" },
                        shares: {
                          type: "array",
                          items: {
                            type: "object",
                            items: {
                              isdir: { type: "boolean" },
                              name: { type: "string" },
                              path: { type: "string" }
                            }
                          }
                        },
                        total: { type: "integer" }
                      }
                    }
                  }
                }
              }
            },
            Mount: {
              apis: {
                List: {
                  methods: {
                    get: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            isoList: { type: "array", items: { type: "unknown" } },
                            mountConfig: {
                              type: "object",
                              items: {
                                enable_iso_mount: { type: "boolean" },
                                enable_remote_mount: { type: "boolean" }
                              }
                            },
                            remoteList: { type: "array", items: { type: "unknown" } }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        Finder: {
          apis: {
            Bookmark: {
              methods: {
                get: {
                  1: {
                    response: {
                      type: "object",
                      items: {
                        bookmarks: { type: "array", items: { type: "unknown" } },
                        total: { type: "integer" }
                      }
                    }
                  }
                }
              }
            },
            FileIndexing: {
              apis: {
                Folder: {
                  methods: {
                    list: {
                      1: {
                        params: {
                          type: "object",
                          optional: true,
                          items: {
                            direction: { type: "enum", items: ["asc", "desc"], optional: true },
                            sort_by: { type: "enum", items: ["path"], optional: true },
                            offset: { type: "integer", optional: true },
                            additional: { type: "array", items: { type: "unknown" }, optional: true }
                          }
                        },
                        response: {
                          type: "object",
                          items: {
                            folder: { type: "array", items: { type: "unknown" } },
                            offset: { type: "integer" },
                            total: { type: "integer" }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            Preference: {
              methods: {
                get: {
                  1: {
                    response: {
                      type: "object",
                      items: {
                        enable_history: { type: "boolean" },
                        max_fragment_num: { type: "integer" },
                        max_history_num: { type: "integer" }
                      }
                    }
                  }
                }
              }
            },
            Settings: {
              methods: {
                get: {
                  1: {
                    response: {
                      type: "object",
                      items: {
                        db_reading_method: { type: "enum", items: ["fs_directory"] },
                        display_vmtouch_option: { type: "boolean" },
                        enable_cppjieba_dict: { type: "boolean" },
                        enable_mlock: { type: "boolean" },
                        enable_preload_indices: { type: "boolean" },
                        enable_vmtouch: { type: "boolean" },
                        max_alive_db_count: { type: "integer" },
                        max_search_hit_count: { type: "integer" },
                        reader_alive_timeout: { type: "integer" },
                        synotifyd_event_mask: { type: "integer" },
                        vmtouch_reserve_mem: { type: "integer" }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        ResourceMonitor: {
          apis: {
            Setting: {
              methods: {
                get: {
                  1: {
                    response: {
                      type: "object",
                      items: {
                        enable_history: { type: "boolean" }
                      }
                    }
                  }
                },
                set: {
                  1: {
                    respond: false,
                    params: {
                      type: "object",
                      items: {
                        enable_history: { type: "boolean" }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        SecureSignIn: {
          apis: {
            AMFA: {
              apis: {
                Policy: {
                  methods: {
                    get: {
                      1: {
                        response: {
                          type: "object",
                          items: {
                            type: { type: "string" },
                            group_list: { type: "string" },
                            user_list: { type: "string" }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            Method: {
              methods: {
                get: {
                  1: {
                    response: {
                      type: "object",
                      items: {
                        auth_type: { type: "array", items: { type: "unknown" } },
                        mode: { type: "string" },
                        status: { type: "string" },
                        time: { type: "integer" }
                      }
                    }
                  }
                }
              }
            },
            Package: {
              methods: {
                get: {
                  1: {
                    response: {
                      type: "object",
                      items: {
                        account_status: { type: "boolean" },
                        enabled: { type: "boolean" }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        SecurityAdvisor: {
          apis: {
            Conf: {
              apis: {
                Location: {
                  methods: {
                    get: {
                      1: {}
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
